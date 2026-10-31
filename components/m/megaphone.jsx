import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vmlj--b4j.css';
import '../../css/w/w53fznbzo.css';
import '../../css/a/amhn4-8wy.css';
import '../../css/t/tsvzyp4zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vmlj--b4j wm-shadow"/><path class="w53fznbzo wm-shadow"/><path class="amhn4-8wy"/><path class="tsvzyp4zs"/></g>`,
		"fallback": "withicons-brutal:megaphone",
	});
}

export default Component;
