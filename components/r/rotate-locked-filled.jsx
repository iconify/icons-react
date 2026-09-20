import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no0_jw34d.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no0_jw34d"/>`,
		"fallback": "tdesign:rotate-locked-filled",
	});
}

export default Component;
