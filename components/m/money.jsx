import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs5ksoa2z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs5ksoa2z"/>`,
		"fallback": "dashicons:money",
	});
}

export default Component;
