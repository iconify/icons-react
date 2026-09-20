import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_d0yw8xz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_d0yw8xz"/>`,
		"fallback": "nonicons:vim-select-mode-16",
	});
}

export default Component;
