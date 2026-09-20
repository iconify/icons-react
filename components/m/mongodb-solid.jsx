import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmt-5dbqz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmt-5dbqz"/>`,
		"fallback": "teenyicons:mongodb-solid",
	});
}

export default Component;
