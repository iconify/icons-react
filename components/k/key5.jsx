import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i2-yz2bec.css';
import '../../css/s/sno6d0bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i2-yz2bec"/><path class="sno6d0bwt"/></g>`,
		"fallback": "reicon:key5",
	});
}

export default Component;
