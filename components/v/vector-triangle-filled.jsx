import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx5apzz_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx5apzz_d"/>`,
		"fallback": "boxicons:vector-triangle-filled",
	});
}

export default Component;
