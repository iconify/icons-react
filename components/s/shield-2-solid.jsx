import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g72s21blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g72s21blw"/>`,
		"fallback": "streamline-sharp:shield-2-solid",
	});
}

export default Component;
