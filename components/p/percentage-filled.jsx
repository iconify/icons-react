import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtddmc8gv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtddmc8gv"/>`,
		"fallback": "carbon:percentage-filled",
	});
}

export default Component;
