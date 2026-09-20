import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npy_5y7xe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npy_5y7xe"/>`,
		"fallback": "teenyicons:star-circle-solid",
	});
}

export default Component;
