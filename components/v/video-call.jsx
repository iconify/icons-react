import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx5ltho2y.css';
import '../../css/x/xoymbvb-h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx5ltho2y"/><path class="xoymbvb-h"/>`,
		"fallback": "flat-color-icons:video-call",
	});
}

export default Component;
