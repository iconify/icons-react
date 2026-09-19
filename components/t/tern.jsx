import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnlx58bqx.css';

const viewBox = {"width":491,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnlx58bqx"/>`,
		"fallback": "file-icons:tern",
	});
}

export default Component;
