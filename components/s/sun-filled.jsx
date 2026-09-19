import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bch5yjxyw.css';
import '../../css/j/j6p__-b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bch5yjxyw"/><path clip-rule="evenodd" class="j6p__-b8q"/>`,
		"fallback": "bitcoin-icons:sun-filled",
	});
}

export default Component;
