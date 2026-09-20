import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcqednb9u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcqednb9u"/>`,
		"fallback": "pinhead:person-slipping-on-ramp",
	});
}

export default Component;
