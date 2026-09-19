import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4ja2u2gr.css';
import '../../css/f/f3lwcxwxj.css';
import '../../css/v/vo5bnim8v.css';
import '../../css/h/hcug3lbyp.css';
import '../../css/w/wsh_gnb-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4ja2u2gr"/><path class="f3lwcxwxj"/><path class="vo5bnim8v"/><circle class="hcug3lbyp"/><circle class="wsh_gnb-t"/></g>`,
		"fallback": "icon-park:peas",
	});
}

export default Component;
