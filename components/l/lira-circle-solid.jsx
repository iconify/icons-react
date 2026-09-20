import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0tm76bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0tm76bpf"/>`,
		"fallback": "mynaui:lira-circle-solid",
	});
}

export default Component;
