import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njxyj_4yr.css';
import '../../css/x/xw091kb3m.css';
import '../../css/t/tfjvx4knf.css';
import '../../css/y/y7j-zm3me.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="njxyj_4yr"/><path class="xw091kb3m"/><path class="tfjvx4knf"/><path class="y7j-zm3me"/></g>`,
		"fallback": "fluent-emoji-flat:soap",
	});
}

export default Component;
