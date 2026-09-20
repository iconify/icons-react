import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxc_ccc7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxc_ccc7i"/>`,
		"fallback": "mage:package-box-fill",
	});
}

export default Component;
