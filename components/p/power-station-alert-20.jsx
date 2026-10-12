import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo5pkcblg.css';
import '../../css/m/mbm3jfb1f.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo5pkcblg"/><path class="mbm3jfb1f"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:power-station-alert-20",
	});
}

export default Component;
