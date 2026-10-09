import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o51dot6hb.css';
import '../../css/y/ybcmecbwb.css';
import '../../css/r/r9ac0nb5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o51dot6hb"/><path class="ybcmecbwb"/><path class="r9ac0nb5d"/>`,
		"fallback": "energy-icons:sprout-48",
	});
}

export default Component;
