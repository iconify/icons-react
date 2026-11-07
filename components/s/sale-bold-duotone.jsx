import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0rjtzvug.css';
import '../../css/s/sqj5jrb3e.css';
import '../../css/d/dkjc56b1a.css';
import '../../css/h/hpi3dgb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0rjtzvug"/><path class="sqj5jrb3e"/><path class="dkjc56b1a"/><path class="hpi3dgb3m"/>`,
		"fallback": "solar:sale-bold-duotone",
	});
}

export default Component;
