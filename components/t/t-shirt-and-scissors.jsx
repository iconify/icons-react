import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcqte1bgj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcqte1bgj"/>`,
		"fallback": "roentgen:t-shirt-and-scissors",
	});
}

export default Component;
