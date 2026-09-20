import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq9f7vbyh.css';
import '../../css/c/cxo2_0b1m.css';
import '../../css/v/vxkdfcc5t.css';
import '../../css/z/zqvy08uvh.css';
import '../../css/p/przwzicfn.css';
import '../../css/t/t36buroud.css';
import '../../css/z/zxcpttgwn.css';
import '../../css/t/t8bxqrbrb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq9f7vbyh"/><path class="cxo2_0b1m"/><path class="vxkdfcc5t"/><path class="zqvy08uvh"/><path class="przwzicfn"/><path class="t36buroud"/><circle class="zxcpttgwn"/><circle class="t8bxqrbrb"/>`,
		"fallback": "openmoji:pouting-cat",
	});
}

export default Component;
