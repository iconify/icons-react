import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7hrptk6n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7hrptk6n"/>`,
		"fallback": "sidekickicons:step-backward-20-solid",
	});
}

export default Component;
