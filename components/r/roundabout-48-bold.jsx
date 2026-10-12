import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r961dwb-b.css';
import '../../css/u/ulqrzxjer.css';
import '../../css/w/wmrfpsbbx.css';
import '../../css/f/fnjlcibvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r961dwb-b"/><path class="ulqrzxjer"/><path class="wmrfpsbbx"/><path class="fnjlcibvd"/>`,
		"fallback": "energy-icons:roundabout-48-bold",
	});
}

export default Component;
