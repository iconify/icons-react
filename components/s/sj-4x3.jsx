import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx93awbad.css';
import '../../css/j/jtbbcksnj.css';
import '../../css/l/lm6pm0b8y.css';
import '../../css/d/d7yc9lfha.css';
import '../../css/k/kz5xdnzet.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx93awbad"/><path class="jtbbcksnj"/><path class="lm6pm0b8y"/><path class="d7yc9lfha"/><path class="kz5xdnzet"/>`,
		"fallback": "flag:sj-4x3",
	});
}

export default Component;
