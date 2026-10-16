import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsw62-7zd.css';
import '../../css/i/iib416bcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsw62-7zd"/><path class="iib416bcq"/>`,
		"fallback": "energy-icons:respirator-48-bold",
	});
}

export default Component;
