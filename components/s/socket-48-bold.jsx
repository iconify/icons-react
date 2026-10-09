import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkarr2bij.css';
import '../../css/k/k6ocuztoi.css';
import '../../css/g/gv5tz0b7p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkarr2bij"/><path class="k6ocuztoi"/><path class="gv5tz0b7p"/>`,
		"fallback": "energy-icons:socket-48-bold",
	});
}

export default Component;
