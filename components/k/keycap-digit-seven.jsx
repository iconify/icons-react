import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixxthgb1d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixxthgb1d"/>`,
		"fallback": "dinkie-icons:keycap-digit-seven",
	});
}

export default Component;
