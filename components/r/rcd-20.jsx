import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw4_rr5le.css';
import '../../css/a/ahqrd-o5z.css';
import '../../css/n/npeb0bbgi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw4_rr5le"/><path class="ahqrd-o5z"/><path class="npeb0bbgi"/>`,
		"fallback": "energy-icons:rcd-20",
	});
}

export default Component;
