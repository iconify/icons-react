import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wku28jkbv.css';
import '../../css/e/eagcwzj3r.css';
import '../../css/s/scd3bbbpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wku28jkbv"/><path class="eagcwzj3r"/><path class="scd3bbbpj"/>`,
		"fallback": "energy-icons:layers-48-bold",
	});
}

export default Component;
