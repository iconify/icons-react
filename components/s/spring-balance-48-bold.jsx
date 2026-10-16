import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1s64xbrq.css';
import '../../css/i/ironyyb0b.css';
import '../../css/u/ugvw6bcga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1s64xbrq"/><path class="ironyyb0b"/><path class="ugvw6bcga"/>`,
		"fallback": "energy-icons:spring-balance-48-bold",
	});
}

export default Component;
