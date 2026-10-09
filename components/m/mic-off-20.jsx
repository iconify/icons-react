import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_yax-h2e.css';
import '../../css/d/d8q64recs.css';
import '../../css/f/ft5pk3bco.css';
import '../../css/t/t13pyabps.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_yax-h2e"/><path class="d8q64recs"/><path class="ft5pk3bco"/><path class="t13pyabps"/>`,
		"fallback": "energy-icons:mic-off-20",
	});
}

export default Component;
