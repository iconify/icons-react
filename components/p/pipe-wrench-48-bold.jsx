import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjg8qor2a.css';
import '../../css/k/kyzz2cc9p.css';
import '../../css/l/l9lokr6ut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjg8qor2a"/><path class="kyzz2cc9p"/><path class="l9lokr6ut"/>`,
		"fallback": "energy-icons:pipe-wrench-48-bold",
	});
}

export default Component;
