import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr28mrwkz.css';
import '../../css/h/hna37so3u.css';
import '../../css/s/su958tz7j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr28mrwkz"/><path class="hna37so3u"/><path class="su958tz7j"/>`,
		"fallback": "energy-icons:tea-cup-48-bold",
	});
}

export default Component;
