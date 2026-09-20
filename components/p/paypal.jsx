import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvbn4vepc.css';
import '../../css/k/kq37wbc8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvbn4vepc"/><path class="kq37wbc8g"/>`,
		"fallback": "lineicons:paypal",
	});
}

export default Component;
