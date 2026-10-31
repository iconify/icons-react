import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/ty2upabki.css';
import '../../css/a/a-zbi3bjx.css';
import '../../css/i/i5lay3b9t.css';
import '../../css/b/bbz2ti0md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ty2upabki wm-shadow"/><path class="a-zbi3bjx wm-shadow"/><path class="i5lay3b9t"/><path class="bbz2ti0md"/></g>`,
		"fallback": "withicons-brutal:type",
	});
}

export default Component;
