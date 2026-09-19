import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eql8q_spe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eql8q_spe"/>`,
		"fallback": "fa7-solid:mountain-city",
	});
}

export default Component;
