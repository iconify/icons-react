import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agq-2qutk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agq-2qutk"/>`,
		"fallback": "carbon:logo-red-hat-ai-instructlab-on-ibm-cloud",
	});
}

export default Component;
