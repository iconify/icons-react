import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8e4y6bil.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8e4y6bil"/>`,
		"fallback": "et:traget",
	});
}

export default Component;
