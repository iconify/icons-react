import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o55bhr6zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o55bhr6zy"/>`,
		"fallback": "coolicons:log-out-fill-round",
	});
}

export default Component;
