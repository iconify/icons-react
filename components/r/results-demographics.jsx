import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sptkvotuc.css';
import '../../css/h/hs6ysgr6t.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sptkvotuc"/><path class="hs6ysgr6t"/>`,
		"fallback": "foundation:results-demographics",
	});
}

export default Component;
