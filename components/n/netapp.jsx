import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjys986ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjys986ht"/>`,
		"fallback": "simple-icons:netapp",
	});
}

export default Component;
