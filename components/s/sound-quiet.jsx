import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m89ik2bai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m89ik2bai"/>`,
		"fallback": "ix:sound-quiet",
	});
}

export default Component;
