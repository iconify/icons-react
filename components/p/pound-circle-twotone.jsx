import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/x/xc74369tb.css';
import '../../css/b/bvvjoke2f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="xc74369tb"/><path class="bvvjoke2f"/>`,
		"fallback": "ant-design:pound-circle-twotone",
	});
}

export default Component;
