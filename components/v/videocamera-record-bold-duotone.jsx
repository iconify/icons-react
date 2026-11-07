import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a10be2bti.css';
import '../../css/t/tpknrjtqz.css';
import '../../css/e/e_jwy8bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a10be2bti"/><path class="tpknrjtqz"/><path clip-rule="evenodd" class="e_jwy8bcz"/>`,
		"fallback": "solar:videocamera-record-bold-duotone",
	});
}

export default Component;
