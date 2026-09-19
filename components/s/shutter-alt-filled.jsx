import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzm0xyeiv.css';
import '../../css/x/xs08igbmf.css';
import '../../css/x/xaa-pclmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzm0xyeiv"/><path class="xs08igbmf"/><path class="xaa-pclmk"/>`,
		"fallback": "boxicons:shutter-alt-filled",
	});
}

export default Component;
