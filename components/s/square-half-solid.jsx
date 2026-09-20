import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-sx6ybrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-sx6ybrp"/>`,
		"fallback": "mynaui:square-half-solid",
	});
}

export default Component;
