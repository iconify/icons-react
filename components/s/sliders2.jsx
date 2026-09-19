import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws0_qmb3s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws0_qmb3s"/>`,
		"fallback": "bi:sliders2",
	});
}

export default Component;
