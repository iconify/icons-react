import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia6mdpbwe.css';
import '../../css/x/xcai5v0mm.css';
import '../../css/o/o711sl-jp.css';
import '../../css/j/jnk9ko9jd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ia6mdpbwe"/><path class="xcai5v0mm"/><path class="o711sl-jp"/><circle class="jnk9ko9jd"/></g>`,
		"fallback": "reicon:star-sparkle",
	});
}

export default Component;
