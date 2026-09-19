import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cshrilb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cshrilb0y"/>`,
		"fallback": "gcp:transfer",
	});
}

export default Component;
