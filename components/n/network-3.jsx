import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knsyygmgu.css';
import '../../css/a/a6hum9hrz.css';
import '../../css/d/doyyo9bqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knsyygmgu"/><path class="a6hum9hrz"/><path class="doyyo9bqt"/>`,
		"fallback": "carbon:network-3",
	});
}

export default Component;
