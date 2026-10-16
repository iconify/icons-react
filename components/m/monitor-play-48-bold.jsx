import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw2mmrfxt.css';
import '../../css/p/phox42bnd.css';
import '../../css/q/q8ft2nb-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw2mmrfxt"/><path class="phox42bnd"/><path class="q8ft2nb-w"/>`,
		"fallback": "energy-icons:monitor-play-48-bold",
	});
}

export default Component;
