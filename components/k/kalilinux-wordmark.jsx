import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3qu3rbqo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3qu3rbqo"/>`,
		"fallback": "devicon-plain:kalilinux-wordmark",
	});
}

export default Component;
