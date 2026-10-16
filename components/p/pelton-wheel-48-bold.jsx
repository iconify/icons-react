import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shxbbmbnq.css';
import '../../css/t/t443hym5f.css';
import '../../css/s/sibfjm0-h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shxbbmbnq"/><path class="t443hym5f"/><path class="sibfjm0-h"/>`,
		"fallback": "energy-icons:pelton-wheel-48-bold",
	});
}

export default Component;
