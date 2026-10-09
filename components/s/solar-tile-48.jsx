import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng_19u0xj.css';
import '../../css/e/ee19msoje.css';
import '../../css/a/a10r67bkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng_19u0xj"/><path class="ee19msoje"/><path class="a10r67bkt"/>`,
		"fallback": "energy-icons:solar-tile-48",
	});
}

export default Component;
