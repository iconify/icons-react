import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrz_pqblx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrz_pqblx"/>`,
		"fallback": "devicon-plain:teamcity",
	});
}

export default Component;
