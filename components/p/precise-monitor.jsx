import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpo_bc98z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpo_bc98z"/>`,
		"fallback": "tdesign:precise-monitor",
	});
}

export default Component;
