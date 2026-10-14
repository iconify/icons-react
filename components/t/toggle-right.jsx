import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a0y-inb-l.css';
import '../../css/t/tnj09sqey.css';
import '../../css/i/is6gckbui.css';
import '../../css/n/nsdw83beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="a0y-inb-l"/><path class="tnj09sqey"/><path class="is6gckbui"/><path class="nsdw83beg"/></g>`,
		"fallback": "matita:toggle-right",
	});
}

export default Component;
