import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzhgbf3_i.css';
import '../../css/o/o_os-tbha.css';
import '../../css/y/yk66m8x8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzhgbf3_i"/><path class="o_os-tbha"/><path class="yk66m8x8g"/>`,
		"fallback": "energy-icons:medal-48-bold",
	});
}

export default Component;
