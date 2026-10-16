import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewic4fbqt.css';
import '../../css/k/kunjmdq2f.css';
import '../../css/j/ja15efbfb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewic4fbqt"/><path class="kunjmdq2f"/><path class="ja15efbfb"/>`,
		"fallback": "energy-icons:synchronous-condenser-20-bold",
	});
}

export default Component;
