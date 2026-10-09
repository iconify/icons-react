import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx6btm5lw.css';
import '../../css/v/vm-h8y56c.css';
import '../../css/i/iaax7gb6o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx6btm5lw"/><path class="vm-h8y56c"/><path class="iaax7gb6o"/>`,
		"fallback": "energy-icons:pumped-hydro-20-bold",
	});
}

export default Component;
