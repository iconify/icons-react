import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly_hv7bof.css';
import '../../css/a/azjk1obih.css';
import '../../css/w/w13xa3b8t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly_hv7bof"/><path class="azjk1obih"/><path class="w13xa3b8t"/>`,
		"fallback": "energy-icons:monitor-play-48",
	});
}

export default Component;
