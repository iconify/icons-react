import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmoyvb9wf.css';
import '../../css/j/je2hmjd-t.css';
import '../../css/k/k5w5kdbbu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmoyvb9wf"/><path class="je2hmjd-t"/><path class="k5w5kdbbu"/>`,
		"fallback": "energy-icons:running-48-bold",
	});
}

export default Component;
