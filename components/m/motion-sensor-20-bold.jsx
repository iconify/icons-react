import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgidmqc2p.css';
import '../../css/v/v2otxnbjx.css';
import '../../css/m/m_hwvkbhw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgidmqc2p"/><path class="v2otxnbjx"/><path class="m_hwvkbhw"/>`,
		"fallback": "energy-icons:motion-sensor-20-bold",
	});
}

export default Component;
