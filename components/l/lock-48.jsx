import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6deh2baw.css';
import '../../css/l/lc3h535iw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6deh2baw"/><path class="lc3h535iw"/>`,
		"fallback": "energy-icons:lock-48",
	});
}

export default Component;
