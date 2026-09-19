import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed5umqaqa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed5umqaqa"/>`,
		"fallback": "cib:stripe",
	});
}

export default Component;
