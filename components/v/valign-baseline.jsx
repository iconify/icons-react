import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9vqu.css';
import '../../css/q/qa-o7h.css';
import '../../css/c/cjd4hj.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv9vqu qa-o7h"/><path class="cjd4hj qa-o7h"/>`,
		"fallback": "line-md:valign-baseline",
	});
}

export default Component;
