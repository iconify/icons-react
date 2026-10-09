import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/batmvgb8l.css';
import '../../css/k/ks20pegmu.css';
import '../../css/d/dczvvtbjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="batmvgb8l"/><path class="ks20pegmu"/><path class="dczvvtbjx"/>`,
		"fallback": "energy-icons:speaker-48",
	});
}

export default Component;
