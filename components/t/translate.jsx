import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbl-y_rlh.css';
import '../../css/x/xxl63pf9y.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbl-y_rlh"/><path class="xxl63pf9y"/>`,
		"fallback": "gis:translate",
	});
}

export default Component;
