import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n0chui-tt.css';
import '../../css/c/ckhoanbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n0chui-tt"/><path class="ckhoanbse"/></g>`,
		"fallback": "mage:water-glass",
	});
}

export default Component;
