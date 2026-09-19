import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiop7zcov.css';
import '../../css/s/s9vs66t3i.css';
import '../../css/o/oqmockrge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiop7zcov"/><path class="s9vs66t3i"/><path class="oqmockrge"/>`,
		"fallback": "flag:mq-1x1",
	});
}

export default Component;
