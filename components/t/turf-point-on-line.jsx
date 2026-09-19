import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg9h-rbgi.css';
import '../../css/h/hnwh_8bzy.css';
import '../../css/g/gqrul3baz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg9h-rbgi"/><circle class="hnwh_8bzy"/><path class="gqrul3baz"/>`,
		"fallback": "geo:turf-point-on-line",
	});
}

export default Component;
