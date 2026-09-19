import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1_ppfqff.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1_ppfqff"/>`,
		"fallback": "f7:smoke",
	});
}

export default Component;
