import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inl2l1b8j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inl2l1b8j"/>`,
		"fallback": "teenyicons:send-solid",
	});
}

export default Component;
