import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms1l_22xi.css';
import '../../css/i/ini9cjbwb.css';
import '../../css/v/vrrpkgb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms1l_22xi"/><path class="ini9cjbwb"/><path class="vrrpkgb-u"/>`,
		"fallback": "streamline-ultimate:monitor-transfer-1-bold",
	});
}

export default Component;
