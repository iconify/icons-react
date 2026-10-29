import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btcv4zsiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btcv4zsiz"/>`,
		"fallback": "withicons:reply-all-solid",
	});
}

export default Component;
