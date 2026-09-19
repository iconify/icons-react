import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkn1q5bew.css';

const viewBox = {"width":40,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkn1q5bew"/>`,
		"fallback": "et:megaphone",
	});
}

export default Component;
