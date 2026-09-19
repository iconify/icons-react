import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ybdmbxw.css';

const viewBox = {"width":352,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ybdmbxw"/>`,
		"fallback": "ps:twitter",
	});
}

export default Component;
