import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mv2y2abjm.css';
import '../../css/o/oftu6aboy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGndQR5c2x"><g class="v3_i3wktz"><path class="mv2y2abjm"/><path class="oftu6aboy"/></g></mask></defs><path mask="url(#SVGndQR5c2x)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ring",
	});
}

export default Component;
