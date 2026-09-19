import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcmg3m81t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcmg3m81t"/>`,
		"fallback": "at-icons:lock",
	});
}

export default Component;
