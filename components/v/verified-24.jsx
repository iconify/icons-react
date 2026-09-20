import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bspz8r2wy.css';
import '../../css/s/s-uxakxfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bspz8r2wy"/><path class="s-uxakxfc"/>`,
		"fallback": "octicon:verified-24",
	});
}

export default Component;
