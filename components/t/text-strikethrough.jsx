import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atkvy_bhz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atkvy_bhz"/>`,
		"fallback": "carbon:text-strikethrough",
	});
}

export default Component;
