import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bojbs1zxp.css';
import '../../css/t/tuobqqwah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bojbs1zxp"/><path class="tuobqqwah"/>`,
		"fallback": "boxicons:tablet-filled",
	});
}

export default Component;
