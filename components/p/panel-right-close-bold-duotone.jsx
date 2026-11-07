import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1nbikbny.css';
import '../../css/j/jmf54fbtj.css';
import '../../css/t/tbtey3bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1nbikbny"/><path class="jmf54fbtj"/><path class="tbtey3bjo"/>`,
		"fallback": "solar:panel-right-close-bold-duotone",
	});
}

export default Component;
