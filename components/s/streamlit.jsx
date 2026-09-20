import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg2dgvbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg2dgvbma"/>`,
		"fallback": "thesvg:streamlit",
	});
}

export default Component;
