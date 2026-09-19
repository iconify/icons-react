import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aog-1ebri.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aog-1ebri"/>`,
		"fallback": "dinkie-icons:keycap-digit-five-small",
	});
}

export default Component;
