import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/weo9vnbgh.css';
import '../../css/b/b0vrlib6h.css';
import '../../css/c/cd1yi91ez.css';
import '../../css/f/f88gcobup.css';
import '../../css/h/hbfe0bbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="weo9vnbgh wm-shadow"/><path class="b0vrlib6h wm-shadow"/><path class="cd1yi91ez"/><path class="f88gcobup"/><path class="hbfe0bbyy"/></g>`,
		"fallback": "withicons-brutal:mail",
	});
}

export default Component;
