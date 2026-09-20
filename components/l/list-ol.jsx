import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liwkamb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liwkamb5o"/>`,
		"fallback": "uil:list-ol",
	});
}

export default Component;
