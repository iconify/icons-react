import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8pc8-bqe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8pc8-bqe"/>`,
		"fallback": "streamline-flex:return-square-2-solid",
	});
}

export default Component;
