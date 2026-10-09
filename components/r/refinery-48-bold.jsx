import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eojz8nbhf.css';
import '../../css/l/lalcw8bzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eojz8nbhf"/><path class="lalcw8bzw"/>`,
		"fallback": "energy-icons:refinery-48-bold",
	});
}

export default Component;
