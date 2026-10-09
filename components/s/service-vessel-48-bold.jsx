import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_hrlmb2h.css';
import '../../css/t/tbt13x_gy.css';
import '../../css/i/iipfeyb4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_hrlmb2h"/><path class="tbt13x_gy"/><path class="iipfeyb4m"/>`,
		"fallback": "energy-icons:service-vessel-48-bold",
	});
}

export default Component;
