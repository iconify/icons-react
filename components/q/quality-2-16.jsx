import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slpwxxgtw.css';
import '../../css/k/kpriymdxa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slpwxxgtw"/><path class="kpriymdxa"/>`,
		"fallback": "qlementine-icons:quality-2-16",
	});
}

export default Component;
