import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy5wuebdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy5wuebdp"/>`,
		"fallback": "keyline-icons:layout-dashboard-sharp",
	});
}

export default Component;
