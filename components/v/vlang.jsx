import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsp-aobcy.css';
import '../../css/f/fbai653fp.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsp-aobcy"/><path class="fbai653fp"/>`,
		"fallback": "material-icon-theme:vlang",
	});
}

export default Component;
