import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uurmy6bna.css';
import '../../css/e/eivsv4x-i.css';
import '../../css/d/d7sz30-lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="uurmy6bna"/><rect class="eivsv4x-i"/><path class="d7sz30-lr"/></g>`,
		"fallback": "proicons:library",
	});
}

export default Component;
