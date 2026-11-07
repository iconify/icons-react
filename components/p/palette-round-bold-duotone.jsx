import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaqcsrbps.css';
import '../../css/e/etx3uacem.css';
import '../../css/a/ar4azzsja.css';
import '../../css/y/yk2l4-b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qaqcsrbps"/><path class="etx3uacem"/><path class="ar4azzsja"/><path class="yk2l4-b7j"/>`,
		"fallback": "solar:palette-round-bold-duotone",
	});
}

export default Component;
