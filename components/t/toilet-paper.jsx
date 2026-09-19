import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc73pgb_z.css';
import '../../css/v/v8c632q8y.css';
import '../../css/b/byp3pi26u.css';
import '../../css/o/o8bzwub_y.css';
import '../../css/q/q34r7ccaw.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oc73pgb_z"/><path class="v8c632q8y"/><ellipse class="byp3pi26u"/><ellipse class="o8bzwub_y"/><path clip-rule="evenodd" class="q34r7ccaw"/>`,
		"fallback": "flat-ui:toilet-paper",
	});
}

export default Component;
