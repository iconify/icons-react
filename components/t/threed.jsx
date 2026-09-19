import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfgx_pj9v.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfgx_pj9v"/>`,
		"fallback": "whh:threed",
	});
}

export default Component;
