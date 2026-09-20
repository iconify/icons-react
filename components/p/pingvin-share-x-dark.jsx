import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td9bw8nuj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td9bw8nuj"/>`,
		"fallback": "selfhst:pingvin-share-x-dark",
	});
}

export default Component;
