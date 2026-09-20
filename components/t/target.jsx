import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p88bbjrpx.css';
import '../../css/m/mm4eu-bgy.css';
import '../../css/n/n04szjpnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p88bbjrpx"/><path class="mm4eu-bgy"/><path class="n04szjpnk"/></g>`,
		"fallback": "mynaui:target",
	});
}

export default Component;
