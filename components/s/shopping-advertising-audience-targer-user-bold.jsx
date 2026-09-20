import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg11e7bbh.css';
import '../../css/p/prb4-qbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg11e7bbh"/><path class="prb4-qbxu"/>`,
		"fallback": "streamline-ultimate:shopping-advertising-audience-targer-user-bold",
	});
}

export default Component;
