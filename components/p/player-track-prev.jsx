import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdpwa7bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdpwa7bpf"/>`,
		"fallback": "tabler:player-track-prev",
	});
}

export default Component;
