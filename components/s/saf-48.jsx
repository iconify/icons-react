import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edwtppbpi.css';
import '../../css/a/aw5_q9beg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edwtppbpi"/><path class="aw5_q9beg"/>`,
		"fallback": "energy-icons:saf-48",
	});
}

export default Component;
