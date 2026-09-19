import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfvn5lb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfvn5lb7l"/>`,
		"fallback": "akar-icons:text-align-left",
	});
}

export default Component;
