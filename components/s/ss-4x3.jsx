import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czpmmccki.css';
import '../../css/z/zp_npu0od.css';
import '../../css/t/tkr1nkhyy.css';
import '../../css/b/byf6y2fkx.css';
import '../../css/q/qpd__bb7t.css';
import '../../css/o/o6p1xcb2t.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czpmmccki"/><path class="zp_npu0od"/><path class="tkr1nkhyy"/><path class="byf6y2fkx"/><path class="qpd__bb7t"/><path class="o6p1xcb2t"/>`,
		"fallback": "flag:ss-4x3",
	});
}

export default Component;
