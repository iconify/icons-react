import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpf9e5ula.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpf9e5ula"/>`,
		"fallback": "cbi:shutter-90",
	});
}

export default Component;
