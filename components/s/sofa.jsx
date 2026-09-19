import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fxa5t9bup.css';
import '../../css/q/qcs51wjjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNmP5XcQo"><g class="v3_i3wktz"><path class="fxa5t9bup"/><path class="qcs51wjjn"/></g></mask></defs><path mask="url(#SVGNmP5XcQo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sofa",
	});
}

export default Component;
