import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmya2ccpk.css';
import '../../css/g/gg1luzbnt.css';
import '../../css/t/t_to33i-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmya2ccpk"/><path clip-rule="evenodd" class="gg1luzbnt"/><rect class="t_to33i-p"/>`,
		"fallback": "bitcoin-icons:milk-filled",
	});
}

export default Component;
