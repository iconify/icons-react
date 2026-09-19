import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwdjy4r4g.css';
import '../../css/c/cgsvaq7sr.css';
import '../../css/a/amuvk0bpt.css';
import '../../css/p/pavit-bsp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwdjy4r4g"/><path class="cgsvaq7sr"/><path class="amuvk0bpt"/><path class="pavit-bsp"/>`,
		"fallback": "devicon:puppeteer",
	});
}

export default Component;
