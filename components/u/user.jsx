import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjnta2jlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yjnta2jlp"/>`,
		"fallback": "reicon:user",
	});
}

export default Component;
