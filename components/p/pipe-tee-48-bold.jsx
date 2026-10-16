import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7znocbrd.css';
import '../../css/e/e2r4n70kq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7znocbrd"/><path class="e2r4n70kq"/>`,
		"fallback": "energy-icons:pipe-tee-48-bold",
	});
}

export default Component;
