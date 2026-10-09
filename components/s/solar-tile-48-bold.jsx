import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if62vfbxx.css';
import '../../css/p/plv6-ib2c.css';
import '../../css/q/qmu5z8fin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if62vfbxx"/><path class="plv6-ib2c"/><path class="qmu5z8fin"/>`,
		"fallback": "energy-icons:solar-tile-48-bold",
	});
}

export default Component;
