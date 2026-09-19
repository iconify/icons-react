import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otytcjcgs.css';
import '../../css/i/io_ndq9wr.css';
import '../../css/g/gu-bvxb1q.css';
import '../../css/a/a9q4ccc7q.css';
import '../../css/x/xzaguo_yo.css';
import '../../css/f/f8v764b6x.css';
import '../../css/n/njzax0-it.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otytcjcgs"/><path class="io_ndq9wr"/><path class="gu-bvxb1q"/><path class="a9q4ccc7q"/><path class="xzaguo_yo"/><path class="f8v764b6x"/><path class="njzax0-it"/></g>`,
		"fallback": "fluent-emoji-flat:sandwich",
	});
}

export default Component;
