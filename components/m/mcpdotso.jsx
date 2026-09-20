import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzxi31bwu.css';
import '../../css/e/ei30q2b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzxi31bwu"/><path class="ei30q2b8d"/>`,
		"fallback": "thesvg-color:mcpdotso",
	});
}

export default Component;
