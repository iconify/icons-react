import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmt0j8b9a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmt0j8b9a"/>`,
		"fallback": "maki:viewpoint-15",
	});
}

export default Component;
