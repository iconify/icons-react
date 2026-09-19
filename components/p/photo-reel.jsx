import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlr0nk9zs.css';
import '../../css/f/f5j6omq0t.css';
import '../../css/o/ot6bipphv.css';
import '../../css/f/f-_hmccfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlr0nk9zs"/><path class="f5j6omq0t"/><path class="ot6bipphv"/><path class="f-_hmccfj"/>`,
		"fallback": "flat-color-icons:photo-reel",
	});
}

export default Component;
