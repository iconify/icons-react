import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke4nxkbkt.css';
import '../../css/s/sfqi7kbmf.css';
import '../../css/t/tzc2xabqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke4nxkbkt"/><path clip-rule="evenodd" class="sfqi7kbmf"/><path clip-rule="evenodd" class="tzc2xabqp"/>`,
		"fallback": "solar:speaker-bold-duotone",
	});
}

export default Component;
