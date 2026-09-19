import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_fujl4ur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_fujl4ur"/>`,
		"fallback": "carbon:model-alt",
	});
}

export default Component;
