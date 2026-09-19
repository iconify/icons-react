import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kfcfzzxue.css';
import '../../css/d/dzlldxbzo.css';
import '../../css/z/zoixtkcpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kfcfzzxue"/><path class="dzlldxbzo"/><path class="zoixtkcpw"/></g>`,
		"fallback": "hugeicons:mentoring",
	});
}

export default Component;
