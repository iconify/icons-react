import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_zmtc4ke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_zmtc4ke"/>`,
		"fallback": "icon-park:moon",
	});
}

export default Component;
