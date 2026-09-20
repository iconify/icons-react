import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfb_6ybbl.css';
import '../../css/i/ih08m4bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kfb_6ybbl"/><path class="ih08m4bpw"/></g>`,
		"fallback": "mynaui:shuffle-alt",
	});
}

export default Component;
