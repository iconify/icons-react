import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiv8dnhip.css';
import '../../css/v/v5b4nab0d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiv8dnhip"/><path class="v5b4nab0d"/>`,
		"fallback": "energy-icons:tidal-stream-turbine-20",
	});
}

export default Component;
