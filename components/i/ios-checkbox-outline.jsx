import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9m2_kb3v.css';
import '../../css/d/d9vrg4bmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9m2_kb3v"/><path class="d9vrg4bmr"/>`,
		"fallback": "ion:ios-checkbox-outline",
	});
}

export default Component;
