import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnahg-_fl.css';
import '../../css/s/s9uxlpl9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnahg-_fl"/><path class="s9uxlpl9s"/>`,
		"fallback": "energy-icons:jar-48-bold",
	});
}

export default Component;
