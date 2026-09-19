import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/e10y7tc3x.css';
import '../../css/m/mfsd7w07b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGo59oLpeP"><g class="v3_i3wktz"><path class="e10y7tc3x"/><path class="mfsd7w07b"/></g></mask></defs><path mask="url(#SVGo59oLpeP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ring-one",
	});
}

export default Component;
