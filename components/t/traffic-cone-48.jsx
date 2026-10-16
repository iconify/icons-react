import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl79hl11f.css';
import '../../css/m/m2n9dacld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl79hl11f"/><path class="m2n9dacld"/>`,
		"fallback": "energy-icons:traffic-cone-48",
	});
}

export default Component;
