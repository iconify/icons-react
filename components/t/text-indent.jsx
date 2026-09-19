import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck4m_fflq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck4m_fflq"/>`,
		"fallback": "carbon:text-indent",
	});
}

export default Component;
