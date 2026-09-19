import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a4dhs4hnq.css';
import '../../css/p/p-tcsib0e.css';
import '../../css/n/n6od47b6s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="a4dhs4hnq"/><path class="p-tcsib0e"/></g><path class="n6od47b6s"/>`,
		"fallback": "garden:microphone-on-stroke-12",
	});
}

export default Component;
