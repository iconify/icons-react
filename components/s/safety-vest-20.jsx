import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo04ejb3q.css';
import '../../css/t/tbxzsjbtj.css';
import '../../css/u/uz57xojdx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo04ejb3q"/><path class="tbxzsjbtj"/><path class="uz57xojdx"/>`,
		"fallback": "energy-icons:safety-vest-20",
	});
}

export default Component;
