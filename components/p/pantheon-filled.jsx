import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chhycz7fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chhycz7fq"/>`,
		"fallback": "bitcoin-icons:pantheon-filled",
	});
}

export default Component;
