import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff5t4wldt.css';
import '../../css/w/ww30y30st.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff5t4wldt"/><path class="ww30y30st"/>`,
		"fallback": "selfhst:pdfcraft",
	});
}

export default Component;
