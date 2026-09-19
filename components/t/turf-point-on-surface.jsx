import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbv4wpb-c.css';
import '../../css/c/csr9vodhl.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbv4wpb-c"/><circle class="csr9vodhl"/>`,
		"fallback": "geo:turf-point-on-surface",
	});
}

export default Component;
