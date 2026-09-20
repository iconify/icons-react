import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_cg_6x-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_cg_6x-f"/>`,
		"fallback": "streamline-logos:microsoft-windows-logo-2",
	});
}

export default Component;
