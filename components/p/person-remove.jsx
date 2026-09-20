import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/i/izvovy.css';
import '../../css/f/f-8s9h.css';
import '../../css/u/u2yb_n.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c izvovy"/><path class="a0m25c f-8s9h"/><path class="a0m25c u2yb_n"/>`,
		"fallback": "line-md:person-remove",
	});
}

export default Component;
