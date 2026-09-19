import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk_0u7b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk_0u7b-p"/>`,
		"fallback": "bitcoin-icons:share-outline",
	});
}

export default Component;
