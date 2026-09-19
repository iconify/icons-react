import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzhtr9y7k.css';
import '../../css/z/zmbgj-x1z.css';
import '../../css/v/vyf6lgyjm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzhtr9y7k"/><path class="zmbgj-x1z"/><path class="vyf6lgyjm"/>`,
		"fallback": "ep:timer",
	});
}

export default Component;
