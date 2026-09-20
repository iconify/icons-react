import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwvob5sdf.css';
import '../../css/m/m23pw1bjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwvob5sdf"/><path class="m23pw1bjl"/>`,
		"fallback": "selfhst:kjell-company",
	});
}

export default Component;
