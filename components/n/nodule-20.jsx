import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s89r-jghf.css';
import '../../css/z/ztpyv-0ig.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s89r-jghf"/><path class="ztpyv-0ig"/>`,
		"fallback": "energy-icons:nodule-20",
	});
}

export default Component;
