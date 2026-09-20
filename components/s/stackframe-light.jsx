import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsh_v_bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsh_v_bre"/>`,
		"fallback": "lets-icons:stackframe-light",
	});
}

export default Component;
