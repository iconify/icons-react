import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb4whf11f.css';
import '../../css/r/rso40ypgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb4whf11f"/><path class="rso40ypgl"/>`,
		"fallback": "streamline-ultimate:shop-sign-open-bold",
	});
}

export default Component;
