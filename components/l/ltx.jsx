import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thlhudbvm.css';
import '../../css/u/ugbw2eb3a.css';
import '../../css/l/le_-26bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thlhudbvm"/><path class="ugbw2eb3a"/><path class="le_-26bvr"/>`,
		"fallback": "token:ltx",
	});
}

export default Component;
