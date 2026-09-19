import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/htj2iz-tx.css';
import '../../css/j/j3ug3mo4b.css';
import '../../css/m/mi2r0hb2l.css';
import '../../css/w/wzh5qtzxl.css';
import '../../css/t/tff-dibrl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="htj2iz-tx"/><circle class="j3ug3mo4b"/><path class="mi2r0hb2l"/><path class="wzh5qtzxl"/><path class="tff-dibrl"/></g>`,
		"fallback": "icon-park:radio-nanny",
	});
}

export default Component;
