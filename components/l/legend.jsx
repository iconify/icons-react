import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txu7fdbjl.css';
import '../../css/y/y0w45ybdc.css';
import '../../css/m/mwcn4kbmy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txu7fdbjl"/><rect class="y0w45ybdc"/><path class="mwcn4kbmy"/>`,
		"fallback": "carbon:legend",
	});
}

export default Component;
