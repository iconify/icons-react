import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/q/qzi6x3eeu.css';
import '../../css/b/bqwt9iilj.css';
import '../../css/f/ftvkakb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="qzi6x3eeu wm-shadow"/><path class="bqwt9iilj"/><path class="ftvkakb5w"/></g>`,
		"fallback": "withicons-brutal:target",
	});
}

export default Component;
