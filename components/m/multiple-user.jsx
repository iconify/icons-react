import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiek2ibjp.css';
import '../../css/t/tml6j6bpx.css';
import '../../css/c/ctqpb75vu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiek2ibjp"/><path class="tml6j6bpx"/><path class="ctqpb75vu"/>`,
		"fallback": "streamline-pixel:multiple-user",
	});
}

export default Component;
