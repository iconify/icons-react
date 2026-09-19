import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_i38kbfh.css';
import '../../css/u/ugyrmsdwo.css';
import '../../css/t/ti3gn7b9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_i38kbfh"/><circle class="ugyrmsdwo"/><path class="ti3gn7b9e"/>`,
		"fallback": "carbon:mobile-audio",
	});
}

export default Component;
