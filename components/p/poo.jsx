import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqmu46v8j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqmu46v8j"/>`,
		"fallback": "fa7-solid:poo",
	});
}

export default Component;
