import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yeu7rfb-l.css';
import '../../css/v/vwn31lq4a.css';
import '../../css/i/i2-ftkb3z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yeu7rfb-l"/><path class="vwn31lq4a"/><path class="i2-ftkb3z"/></g>`,
		"fallback": "streamline-color:tooth",
	});
}

export default Component;
