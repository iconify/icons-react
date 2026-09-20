import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwc74bb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwc74bb8d"/>`,
		"fallback": "tabler:pointer-up",
	});
}

export default Component;
