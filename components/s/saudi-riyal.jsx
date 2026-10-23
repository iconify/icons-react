import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb2c95t9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb2c95t9y"/>`,
		"fallback": "vadivam:saudi-riyal",
	});
}

export default Component;
