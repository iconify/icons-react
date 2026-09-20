import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avzyrmbmb.css';
import '../../css/l/lfpw0jbvm.css';
import '../../css/w/w1ojbvb6h.css';
import '../../css/s/squf_mv4w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="avzyrmbmb"/><path class="lfpw0jbvm"/><path class="w1ojbvb6h"/><path class="squf_mv4w"/></g>`,
		"fallback": "streamline-flex-color:mail-reply-all",
	});
}

export default Component;
