import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx5ltho2y.css';
import '../../css/x/xoymbvb-h.css';
import '../../css/l/lmotn3buu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx5ltho2y"/><path class="xoymbvb-h"/><path class="lmotn3buu"/>`,
		"fallback": "flat-color-icons:no-video",
	});
}

export default Component;
