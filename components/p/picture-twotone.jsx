import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zba5lxb9f.css';
import '../../css/e/e0u3nnbkg.css';
import '../../css/x/xbg8fwbvo.css';
import '../../css/j/jlao-fl0k.css';
import '../../css/r/r720bg59f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zba5lxb9f"/><path class="e0u3nnbkg"/><path class="xbg8fwbvo"/><path class="jlao-fl0k"/><path class="r720bg59f"/>`,
		"fallback": "ant-design:picture-twotone",
	});
}

export default Component;
