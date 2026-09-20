import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/g/gykp3x1ko.css';
import '../../css/t/tup4hsoew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="gykp3x1ko"/><path class="tup4hsoew"/></g>`,
		"fallback": "lets-icons:map",
	});
}

export default Component;
