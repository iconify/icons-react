import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhcb065st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhcb065st"/>`,
		"fallback": "streamline-ultimate:sidebar-line-left",
	});
}

export default Component;
