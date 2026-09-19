import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt6gpltkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xt6gpltkd"/>`,
		"fallback": "bitcoin-icons:water-bucket-filled",
	});
}

export default Component;
