import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/togxi8l0i.css';
import '../../css/c/c4i61rb8w.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="togxi8l0i"/><circle class="c4i61rb8w"/>`,
		"fallback": "geo:turf-kinks",
	});
}

export default Component;
