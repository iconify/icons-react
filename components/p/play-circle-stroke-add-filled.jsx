import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz84-znwv.css';
import '../../css/l/lxe7e-j4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz84-znwv"/><path class="lxe7e-j4d"/>`,
		"fallback": "tdesign:play-circle-stroke-add-filled",
	});
}

export default Component;
