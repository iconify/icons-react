import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnmukzbge.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnmukzbge"/>`,
		"fallback": "dinkie-icons:keycap-tab-small",
	});
}

export default Component;
