import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjat3tp7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjat3tp7i"/>`,
		"fallback": "mingcute:red-packet-fill",
	});
}

export default Component;
