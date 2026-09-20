import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dixa9hblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dixa9hblw"/>`,
		"fallback": "simple-icons:vllm",
	});
}

export default Component;
