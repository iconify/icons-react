import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpn0yibgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tpn0yibgu"/>`,
		"fallback": "streamline-sharp:text-flow-rows-remix",
	});
}

export default Component;
