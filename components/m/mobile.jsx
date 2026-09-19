import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il2q9bcjh.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il2q9bcjh"/>`,
		"fallback": "fa-solid:mobile",
	});
}

export default Component;
