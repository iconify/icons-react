import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_ca49boy.css';
import '../../css/z/zy7z76-2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_ca49boy"/><path class="zy7z76-2w"/>`,
		"fallback": "energy-icons:vertical-axis-turbine-48",
	});
}

export default Component;
