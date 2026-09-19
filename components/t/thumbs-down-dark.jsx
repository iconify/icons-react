import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_d9seb7n.css';
import '../../css/e/etto3nzjw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_d9seb7n"/><path class="etto3nzjw"/></g>`,
		"fallback": "fluent-emoji-flat:thumbs-down-dark",
	});
}

export default Component;
