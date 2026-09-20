import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5npjlsdw.css';
import '../../css/v/v_drcnb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5npjlsdw"/><path class="v_drcnb-p"/>`,
		"fallback": "streamline-ultimate:shopping-broadcast-advertising-monitor-megaphone-bold",
	});
}

export default Component;
