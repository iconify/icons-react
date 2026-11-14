import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8ob31epl.css';
import '../../css/x/xhkufreip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y8ob31epl"/><path class="xhkufreip"/></g>`,
		"fallback": "hugeicons:super-intelligence-02",
	});
}

export default Component;
