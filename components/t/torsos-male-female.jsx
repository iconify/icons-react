import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofrrycbzm.css';
import '../../css/a/amz2rhbpg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofrrycbzm"/><path class="amz2rhbpg"/>`,
		"fallback": "foundation:torsos-male-female",
	});
}

export default Component;
