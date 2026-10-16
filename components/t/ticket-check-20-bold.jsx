import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sssfo6btx.css';
import '../../css/t/tld7w6b8n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sssfo6btx"/><path class="tld7w6b8n"/>`,
		"fallback": "energy-icons:ticket-check-20-bold",
	});
}

export default Component;
