import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ss3-nkz4g.css';
import '../../css/r/rwc51hofy.css';
import '../../css/y/y5bhm8bqp.css';
import '../../css/c/cb7ru6tbe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ss3-nkz4g"/><path class="rwc51hofy"/><path class="y5bhm8bqp"/><path class="cb7ru6tbe"/></g>`,
		"fallback": "fluent-emoji-flat:people-hugging",
	});
}

export default Component;
