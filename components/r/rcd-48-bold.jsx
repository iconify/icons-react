import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnjcr8b9t.css';
import '../../css/f/f7_sevb3w.css';
import '../../css/a/a8x12iari.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnjcr8b9t"/><path class="f7_sevb3w"/><path class="a8x12iari"/>`,
		"fallback": "energy-icons:rcd-48-bold",
	});
}

export default Component;
