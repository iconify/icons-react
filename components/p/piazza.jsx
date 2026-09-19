import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1m_nbbzf.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1m_nbbzf"/>`,
		"fallback": "academicons:piazza",
	});
}

export default Component;
