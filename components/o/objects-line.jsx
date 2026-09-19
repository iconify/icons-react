import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4f47hb9w.css';
import '../../css/g/g2yqdbc5m.css';
import '../../css/v/vcbrqcbbw.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 v4f47hb9w"/><path class="clr-i-outline clr-i-outline-path-2 g2yqdbc5m"/><path class="clr-i-outline clr-i-outline-path-3 vcbrqcbbw"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:objects-line",
	});
}

export default Component;
