import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/k/knohed40f.css';
import '../../css/z/z23l_ofcq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="knohed40f"/><path class="z23l_ofcq"/>`,
		"fallback": "ant-design:play-circle-twotone",
	});
}

export default Component;
