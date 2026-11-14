import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mduu8yfqe.css';
import '../../css/t/t4ve0f8ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mduu8yfqe"/><path class="t4ve0f8ky"/></g>`,
		"fallback": "hugeicons:mail-voice-02",
	});
}

export default Component;
