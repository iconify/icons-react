import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pccf_ob1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pccf_ob1d"/>`,
		"fallback": "pixelarticons:layout-sidebar-right",
	});
}

export default Component;
