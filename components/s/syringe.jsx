import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te-6zluiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te-6zluiw"/>`,
		"fallback": "vadivam:syringe",
	});
}

export default Component;
