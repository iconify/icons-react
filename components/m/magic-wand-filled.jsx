import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cowqw2bkl.css';
import '../../css/k/knoj0abei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cowqw2bkl"/><path class="knoj0abei"/>`,
		"fallback": "bitcoin-icons:magic-wand-filled",
	});
}

export default Component;
