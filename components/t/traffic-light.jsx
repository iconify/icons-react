import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no7-zx8fb.css';
import '../../css/a/aytc8nbwo.css';
import '../../css/o/omo4jjbjo.css';
import '../../css/v/vujhad2mq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="no7-zx8fb"/><path class="aytc8nbwo"/><path class="omo4jjbjo"/><path class="vujhad2mq"/></g>`,
		"fallback": "streamline-cyber-color:traffic-light",
	});
}

export default Component;
