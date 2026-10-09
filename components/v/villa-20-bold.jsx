import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9zz2bdnl.css';
import '../../css/g/gx1h2ob_o.css';
import '../../css/b/bof50_b9q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9zz2bdnl"/><path class="gx1h2ob_o"/><path class="bof50_b9q"/>`,
		"fallback": "energy-icons:villa-20-bold",
	});
}

export default Component;
