import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h33_-nbup.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h33_-nbup"/>`,
		"fallback": "academicons:researchgate",
	});
}

export default Component;
