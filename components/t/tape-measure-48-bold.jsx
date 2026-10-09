import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8g73tbef.css';
import '../../css/k/kui6b9bke.css';
import '../../css/y/yzh_ltb0d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8g73tbef"/><path class="kui6b9bke"/><path class="yzh_ltb0d"/>`,
		"fallback": "energy-icons:tape-measure-48-bold",
	});
}

export default Component;
