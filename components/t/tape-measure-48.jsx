import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow6zdh7dh.css';
import '../../css/m/m0tcvtbkn.css';
import '../../css/g/g179ywr-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow6zdh7dh"/><path class="m0tcvtbkn"/><path class="g179ywr-m"/>`,
		"fallback": "energy-icons:tape-measure-48",
	});
}

export default Component;
