import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2hf5ceba.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2hf5ceba"/>`,
		"fallback": "sidekickicons:quotation-mark-20-solid",
	});
}

export default Component;
