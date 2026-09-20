import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5tpa0s6m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5tpa0s6m"/>`,
		"fallback": "teenyicons:patreon-solid",
	});
}

export default Component;
