import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1zulpt7g.css';
import '../../css/d/dw84qizwp.css';
import '../../css/g/g0qrzmb0i.css';
import '../../css/d/djr925o6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n1zulpt7g"/><path class="dw84qizwp"/><path class="g0qrzmb0i"/><path class="djr925o6i"/></g>`,
		"fallback": "streamline-cyber-color:volume-medium",
	});
}

export default Component;
