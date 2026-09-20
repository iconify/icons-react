import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ri238lb_r.css';
import '../../css/p/pkupc97st.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ri238lb_r"/><path class="pkupc97st"/></g>`,
		"fallback": "thesvg-color:ton",
	});
}

export default Component;
