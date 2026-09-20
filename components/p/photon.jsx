import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay0p6rq1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay0p6rq1s"/>`,
		"fallback": "thesvg:photon",
	});
}

export default Component;
