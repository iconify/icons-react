import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2crrsbjw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o2crrsbjw"/>`,
		"fallback": "teenyicons:mood-smile-solid",
	});
}

export default Component;
