import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skc3wybvf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skc3wybvf"/>`,
		"fallback": "carbon:user-access-locked",
	});
}

export default Component;
