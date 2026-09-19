import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d30kfbc6w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d30kfbc6w"/>`,
		"fallback": "bi:send",
	});
}

export default Component;
