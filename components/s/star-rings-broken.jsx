import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ts4ulcc5q.css';
import '../../css/v/vji9yqbmy.css';
import '../../css/y/yxpmksx3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ts4ulcc5q"/><path class="vji9yqbmy"/><path class="yxpmksx3w"/></g>`,
		"fallback": "solar:star-rings-broken",
	});
}

export default Component;
