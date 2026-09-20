import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzxr2obon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzxr2obon"/>`,
		"fallback": "ix:sound-off",
	});
}

export default Component;
