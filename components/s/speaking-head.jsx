import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9sjl02ro.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/m/m3bbyvbqu.css';
import '../../css/p/ppf1pcc6t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9sjl02ro"/><g class="kdz4acc8r"><path class="m3bbyvbqu"/><path class="ppf1pcc6t"/></g>`,
		"fallback": "openmoji:speaking-head",
	});
}

export default Component;
