import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8cp6cb9j.css';
import '../../css/b/bqwp1jb7n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8cp6cb9j"/><path class="bqwp1jb7n"/>`,
		"fallback": "energy-icons:refresh-20",
	});
}

export default Component;
