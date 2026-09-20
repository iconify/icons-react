import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sm8kzccgq.css';
import '../../css/j/jlj8l_bps.css';
import '../../css/y/yxpmksx3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sm8kzccgq"/><path class="jlj8l_bps"/><path class="yxpmksx3w"/></g>`,
		"fallback": "solar:star-rings-broken",
	});
}

export default Component;
