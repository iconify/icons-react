import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdfpdkohr.css';
import '../../css/w/wewzkacif.css';
import '../../css/m/ma5wuhzfp.css';
import '../../css/n/nj-5vbbux.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdfpdkohr"/><path class="wewzkacif"/><path class="ma5wuhzfp"/><path class="nj-5vbbux"/>`,
		"fallback": "energy-icons:scada-20",
	});
}

export default Component;
