import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9oom-12u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9oom-12u"/>`,
		"fallback": "streamline-sharp:login-2-solid",
	});
}

export default Component;
