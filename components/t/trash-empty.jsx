import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eavwb2bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eavwb2bkz"/>`,
		"fallback": "ci:trash-empty",
	});
}

export default Component;
