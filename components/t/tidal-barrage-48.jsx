import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovsz64b4d.css';
import '../../css/x/x46njsebn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovsz64b4d"/><path class="x46njsebn"/>`,
		"fallback": "energy-icons:tidal-barrage-48",
	});
}

export default Component;
