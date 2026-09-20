import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxdb5_76z.css';
import '../../css/m/mq0bfxeqb.css';
import '../../css/f/fy61_f-vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxdb5_76z"/><path clip-rule="evenodd" class="mq0bfxeqb"/><path class="fy61_f-vm"/>`,
		"fallback": "token:sushi",
	});
}

export default Component;
