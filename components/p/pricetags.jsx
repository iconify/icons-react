import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lf3h5acbj.css';
import '../../css/x/xz6zk-u5v.css';
import '../../css/l/l5rx36btv.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lf3h5acbj"/><path class="xz6zk-u5v"/><path class="l5rx36btv"/></g>`,
		"fallback": "et:pricetags",
	});
}

export default Component;
