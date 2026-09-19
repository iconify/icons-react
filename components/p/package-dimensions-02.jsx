import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e466k-4th.css';
import '../../css/x/xbl9dtu3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e466k-4th"/><path class="xbl9dtu3m"/></g>`,
		"fallback": "hugeicons:package-dimensions-02",
	});
}

export default Component;
