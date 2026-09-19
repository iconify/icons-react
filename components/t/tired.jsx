import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh4sc5b1d.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh4sc5b1d"/>`,
		"fallback": "fa-regular:tired",
	});
}

export default Component;
