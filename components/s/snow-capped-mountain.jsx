import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjhmuybxb.css';
import '../../css/t/tc6my_b3a.css';
import '../../css/x/xwldxi4ex.css';
import '../../css/x/xa5gy-bnw.css';
import '../../css/n/n0d6vss3v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjhmuybxb"/><path class="tc6my_b3a"/><path class="xwldxi4ex"/><path class="xa5gy-bnw"/><path class="n0d6vss3v"/></g>`,
		"fallback": "fluent-emoji-flat:snow-capped-mountain",
	});
}

export default Component;
