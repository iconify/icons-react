import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olibj9bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="olibj9bmi"/>`,
		"fallback": "streamline-sharp:rate-stretch-tool-solid",
	});
}

export default Component;
