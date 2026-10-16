import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv4kqfbhb.css';
import '../../css/k/kqk5arb5g.css';
import '../../css/l/lpcx7nb6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv4kqfbhb"/><path class="kqk5arb5g"/><path class="lpcx7nb6a"/>`,
		"fallback": "energy-icons:tidal-lagoon-48",
	});
}

export default Component;
