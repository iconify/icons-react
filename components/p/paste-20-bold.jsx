import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0ne4_zha.css';
import '../../css/a/appx2gb4r.css';
import '../../css/e/em0ki7-fm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0ne4_zha"/><path class="appx2gb4r"/><path class="em0ki7-fm"/>`,
		"fallback": "energy-icons:paste-20-bold",
	});
}

export default Component;
