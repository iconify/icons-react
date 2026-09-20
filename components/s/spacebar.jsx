import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7zd0739u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7zd0739u"/>`,
		"fallback": "selfhst:spacebar",
	});
}

export default Component;
