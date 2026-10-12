import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrxjo1bon.css';
import '../../css/q/qkwk8ibgx.css';
import '../../css/r/r1vzay_4x.css';
import '../../css/k/k6j_13bxy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrxjo1bon"/><path class="qkwk8ibgx"/><path class="r1vzay_4x"/><path class="k6j_13bxy"/>`,
		"fallback": "energy-icons:roundabout-48",
	});
}

export default Component;
