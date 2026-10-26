import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mazpctb5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mazpctb5o"/>`,
		"fallback": "doodle-icons:list",
	});
}

export default Component;
