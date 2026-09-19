import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekh_09cjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekh_09cjk"/>`,
		"fallback": "bitcoin-icons:tree-structure-filled",
	});
}

export default Component;
