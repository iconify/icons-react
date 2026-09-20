import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smhsy5b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smhsy5b9l"/>`,
		"fallback": "lets-icons:sound",
	});
}

export default Component;
