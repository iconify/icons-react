import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvdgx_4vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvdgx_4vi"/>`,
		"fallback": "noviair-light:mail-arrow-right",
	});
}

export default Component;
