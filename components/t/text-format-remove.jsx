import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc25bjpgv.css';
import '../../css/k/ksajmtbwp.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gc25bjpgv"/><path class="ksajmtbwp"/>`,
		"fallback": "lineicons:text-format-remove",
	});
}

export default Component;
