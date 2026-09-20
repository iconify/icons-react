import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyg-96bhj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyg-96bhj"/>`,
		"fallback": "sidekickicons:pin-16-solid",
	});
}

export default Component;
