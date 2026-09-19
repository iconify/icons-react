import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjwyhhial.css';
import '../../css/m/mco-ovbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sjwyhhial"/><path class="mco-ovbsn"/></g>`,
		"fallback": "hugeicons:money-02",
	});
}

export default Component;
