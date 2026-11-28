import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i17321bsh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/as0h4gb1d.css';
import '../../css/n/nodmk3bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i17321bsh secondary"/><g class="dt0cm9dhy primary"><path class="as0h4gb1d"/><path class="nodmk3bfd"/></g>`,
		"fallback": "iconaut:sparkles-duo",
	});
}

export default Component;
