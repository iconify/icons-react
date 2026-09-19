import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n41p3s9mq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n41p3s9mq"/>`,
		"fallback": "file-icons:vertexshader",
	});
}

export default Component;
