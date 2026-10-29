import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgu9w_bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgu9w_bap"/>`,
		"fallback": "withicons:square-function-solid",
	});
}

export default Component;
