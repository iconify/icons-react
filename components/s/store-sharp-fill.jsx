import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esxgz1wsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esxgz1wsv"/>`,
		"fallback": "keyline-icons:store-sharp-fill",
	});
}

export default Component;
