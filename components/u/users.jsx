import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n6xinhc7m.css';
import '../../css/y/yek9exb0m.css';
import '../../css/s/s8kjchbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="n6xinhc7m"/><path class="yek9exb0m"/><path class="s8kjchbnl"/></g>`,
		"fallback": "majesticons:users",
	});
}

export default Component;
