import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh0qghayh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh0qghayh"/>`,
		"fallback": "fa6-brands:typo3",
	});
}

export default Component;
