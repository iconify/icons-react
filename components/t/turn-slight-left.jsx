import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/n/nj1jhf.css';
import '../../css/c/cqcobr.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c nj1jhf"/><path class="a0m25c cqcobr"/>`,
		"fallback": "line-md:turn-slight-left",
	});
}

export default Component;
