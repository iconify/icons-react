import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocfthbcet.css';
import '../../css/u/uwe64fb8d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocfthbcet"/><path class="uwe64fb8d"/>`,
		"fallback": "material-icon-theme:lefthook",
	});
}

export default Component;
