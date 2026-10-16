import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_kog_yln.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_kog_yln"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:tank-farm-48",
	});
}

export default Component;
