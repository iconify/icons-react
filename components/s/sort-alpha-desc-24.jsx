import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu5mrjb6u.css';
import '../../css/p/prbk2rl9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu5mrjb6u"/><path clip-rule="evenodd" class="prbk2rl9k"/>`,
		"fallback": "qlementine-icons:sort-alpha-desc-24",
	});
}

export default Component;
