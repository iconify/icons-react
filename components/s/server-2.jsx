import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g561plbvc.css';
import '../../css/w/wjwdxgbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g561plbvc"/><path class="wjwdxgbfu"/></g>`,
		"fallback": "mage:server-2",
	});
}

export default Component;
