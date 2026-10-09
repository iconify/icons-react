import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym9ybcc6l.css';
import '../../css/x/xo930qbei.css';
import '../../css/e/e4ja3lute.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym9ybcc6l"/><path class="xo930qbei"/><path class="e4ja3lute"/>`,
		"fallback": "energy-icons:person-walking-48",
	});
}

export default Component;
