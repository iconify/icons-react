import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yss197btb.css';
import '../../css/i/iabrmvfcy.css';
import '../../css/c/c5gmrlmbr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yss197btb"/><path class="iabrmvfcy"/><path class="c5gmrlmbr"/>`,
		"fallback": "gis:search-globe-alt",
	});
}

export default Component;
