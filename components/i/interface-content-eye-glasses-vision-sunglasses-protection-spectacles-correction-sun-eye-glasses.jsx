import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoyql2cez.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoyql2cez"/>`,
		"fallback": "streamline:interface-content-eye-glasses-vision-sunglasses-protection-spectacles-correction-sun-eye-glasses",
	});
}

export default Component;
