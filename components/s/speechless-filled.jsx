import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-c_0r8kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-c_0r8kw"/>`,
		"fallback": "tdesign:speechless-filled",
	});
}

export default Component;
