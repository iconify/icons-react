import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_5v_b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz_5v_b9b"/>`,
		"fallback": "streamline-ultimate:monitor",
	});
}

export default Component;
