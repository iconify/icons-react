import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-9_s5i_e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z-9_s5i_e"/>`,
		"fallback": "lsicon:shelf-filled",
	});
}

export default Component;
