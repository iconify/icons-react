import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avjgopbgk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avjgopbgk"/>`,
		"fallback": "devicon-plain:junit-wordmark",
	});
}

export default Component;
