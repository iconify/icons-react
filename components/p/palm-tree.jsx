import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvbgwwrmy.css';
import '../../css/d/dsew0q4ub.css';
import '../../css/y/ymdtkmtan.css';
import '../../css/h/ha5hgtr1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vvbgwwrmy"/><path class="dsew0q4ub"/><path class="ymdtkmtan"/><path class="ha5hgtr1o"/></g>`,
		"fallback": "fluent-emoji-flat:palm-tree",
	});
}

export default Component;
