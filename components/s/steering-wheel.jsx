import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4snlybdn.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbthfebdn.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n_xx17adb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGO5JmwbtK" class="y4snlybdn"/></defs><g class="ft5dv1b6b"><path class="wbthfebdn"/><use href="#SVGO5JmwbtK"/><use href="#SVGO5JmwbtK" clip-rule="evenodd" class="d2kvgvbvc"/><path class="n_xx17adb"/></g>`,
		"fallback": "icon-park-solid:steering-wheel",
	});
}

export default Component;
