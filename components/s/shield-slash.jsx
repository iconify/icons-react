import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6w-jvbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6w-jvbgk"/>`,
		"fallback": "uil:shield-slash",
	});
}

export default Component;
