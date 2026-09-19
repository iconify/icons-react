import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drwnhmb7i.css';
import '../../css/z/zko9f_jsn.css';
import '../../css/p/p2p5ucbmo.css';
import '../../css/t/tqg-vxbrp.css';
import '../../css/t/t0d6u-bgm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drwnhmb7i"/><path class="zko9f_jsn"/><circle class="p2p5ucbmo"/><circle class="tqg-vxbrp"/><circle class="t0d6u-bgm"/>`,
		"fallback": "formkit:password",
	});
}

export default Component;
