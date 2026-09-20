import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h2zzana6l.css';
import '../../css/f/fu9y3ebsx.css';
import '../../css/s/s6t_yobxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h2zzana6l"/><path class="fu9y3ebsx"/><path class="s6t_yobxf"/></g>`,
		"fallback": "streamline-sharp:watch-square-time",
	});
}

export default Component;
