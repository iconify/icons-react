import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y03i1hb0a.css';
import '../../css/e/eg1b7tind.css';
import '../../css/a/a_1sqryty.css';
import '../../css/n/n7g3ami9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="y03i1hb0a"/><path class="eg1b7tind"/><path class="a_1sqryty"/><path class="n7g3ami9i"/></g>`,
		"fallback": "hugeicons:treadmill-01",
	});
}

export default Component;
