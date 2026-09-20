import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t99-0xbvy.css';
import '../../css/o/ogs-x9j_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t99-0xbvy"/><path clip-rule="evenodd" class="ogs-x9j_d"/>`,
		"fallback": "stash:mic-duotone",
	});
}

export default Component;
