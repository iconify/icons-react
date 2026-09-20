import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc_489fuj.css';
import '../../css/y/y-q3akb5r.css';
import '../../css/b/b-a-r1bnh.css';
import '../../css/y/yujqbog1q.css';
import '../../css/f/fa4d7_gxx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc_489fuj"/><path class="y-q3akb5r"/><path class="b-a-r1bnh"/><path class="yujqbog1q"/><path class="fa4d7_gxx"/>`,
		"fallback": "selfhst:origamivault",
	});
}

export default Component;
