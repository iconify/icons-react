import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q026svbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q026svbvw"/>`,
		"fallback": "streamline-logos:maya-logo-solid",
	});
}

export default Component;
