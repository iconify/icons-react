import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b98gzwbjt.css';
import '../../css/b/buxdajewj.css';
import '../../css/q/qsm441gxb.css';
import '../../css/d/dpsw0ebhg.css';
import '../../css/k/k26y0db1s.css';
import '../../css/q/qmb-qkb1n.css';
import '../../css/q/qg1mg43xm.css';
import '../../css/d/dakggxznd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b98gzwbjt"/><path clip-rule="evenodd" class="buxdajewj"/><path class="qsm441gxb"/><path clip-rule="evenodd" class="dpsw0ebhg"/><path clip-rule="evenodd" class="k26y0db1s"/><path class="qmb-qkb1n"/><path class="qg1mg43xm"/><path clip-rule="evenodd" class="dakggxznd"/>`,
		"fallback": "flat-ui:mail",
	});
}

export default Component;
