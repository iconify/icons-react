import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bna3i2b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bna3i2b3j"/>`,
		"fallback": "bitcoin-icons:question-circle-filled",
	});
}

export default Component;
