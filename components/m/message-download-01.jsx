import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/txqhekeeo.css';
import '../../css/g/gjn1uj6bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="txqhekeeo"/><path class="gjn1uj6bu"/></g>`,
		"fallback": "hugeicons:message-download-01",
	});
}

export default Component;
