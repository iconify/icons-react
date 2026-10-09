import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsm-zt1sg.css';
import '../../css/e/eg_g120yy.css';
import '../../css/h/hy4sx7b2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsm-zt1sg"/><path class="eg_g120yy"/><path class="hy4sx7b2f"/>`,
		"fallback": "energy-icons:scissors-48",
	});
}

export default Component;
