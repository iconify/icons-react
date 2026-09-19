import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww4fyqbuj.css';
import '../../css/g/gogto1b_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww4fyqbuj"/><path class="gogto1b_i"/>`,
		"fallback": "carbon:radio-button-checked",
	});
}

export default Component;
