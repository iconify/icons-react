import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oj8w4xbvf.css';
import '../../css/t/terq8rrsy.css';
import '../../css/m/m8kjw2c8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oj8w4xbvf"/><path class="terq8rrsy"/><path class="m8kjw2c8v"/></g>`,
		"fallback": "reicon:wallet-remove",
	});
}

export default Component;
