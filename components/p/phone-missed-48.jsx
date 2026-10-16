import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9xwe29zq.css';
import '../../css/l/lyuckzd_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9xwe29zq"/><path class="lyuckzd_a"/>`,
		"fallback": "energy-icons:phone-missed-48",
	});
}

export default Component;
