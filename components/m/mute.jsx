import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlnx_8bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlnx_8bky"/>`,
		"fallback": "codex:mute",
	});
}

export default Component;
