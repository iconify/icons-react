import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/sanzuhblu.css';
import '../../css/t/tpbdo1ghu.css';
import '../../css/a/a39c_hb3c.css';
import '../../css/q/qz1d2ov5n.css';
import '../../css/y/ya0rtreoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="sanzuhblu"/><path class="tpbdo1ghu"/><path class="a39c_hb3c"/><path class="qz1d2ov5n"/><path class="ya0rtreoh"/></g>`,
		"fallback": "matita:trash-2",
	});
}

export default Component;
