import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez54jb8ys.css';
import '../../css/w/w5rh0bcun.css';
import '../../css/p/pw_enhbqu.css';
import '../../css/k/ks4bdebtu.css';
import '../../css/y/y43ckzcde.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez54jb8ys"/><path class="w5rh0bcun"/><path class="pw_enhbqu"/><path class="ks4bdebtu"/><path class="y43ckzcde"/>`,
		"fallback": "energy-icons:plug-x-20-bold",
	});
}

export default Component;
