import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm1p_cn4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vm1p_cn4w"/>`,
		"fallback": "streamline-logos:iwiw-logo-2-block",
	});
}

export default Component;
