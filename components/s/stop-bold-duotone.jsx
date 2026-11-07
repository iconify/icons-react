import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eov14kbcx.css';
import '../../css/e/e71xpcq7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eov14kbcx"/><path class="e71xpcq7t"/>`,
		"fallback": "solar:stop-bold-duotone",
	});
}

export default Component;
