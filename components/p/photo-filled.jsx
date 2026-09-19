import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6hykly9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q6hykly9i"/>`,
		"fallback": "bitcoin-icons:photo-filled",
	});
}

export default Component;
