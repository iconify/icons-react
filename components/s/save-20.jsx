import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbnoic5rd.css';
import '../../css/m/m-8nc9b7n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbnoic5rd"/><path class="m-8nc9b7n"/>`,
		"fallback": "energy-icons:save-20",
	});
}

export default Component;
