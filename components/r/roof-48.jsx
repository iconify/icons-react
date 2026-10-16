import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzdbytarx.css';
import '../../css/f/f1f6b4ojb.css';
import '../../css/c/ckv-n0b7d.css';
import '../../css/p/pthdn94lk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzdbytarx"/><path class="f1f6b4ojb"/><path class="ckv-n0b7d"/><path class="pthdn94lk"/>`,
		"fallback": "energy-icons:roof-48",
	});
}

export default Component;
