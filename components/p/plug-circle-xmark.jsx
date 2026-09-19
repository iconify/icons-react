import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zolt8acey.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zolt8acey"/>`,
		"fallback": "fa7-solid:plug-circle-xmark",
	});
}

export default Component;
