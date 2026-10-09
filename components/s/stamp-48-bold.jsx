import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_d0rvbso.css';
import '../../css/a/ak7-_zcym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_d0rvbso"/><path class="ak7-_zcym"/>`,
		"fallback": "energy-icons:stamp-48-bold",
	});
}

export default Component;
