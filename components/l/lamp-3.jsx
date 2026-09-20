import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qkno46xxx.css';
import '../../css/y/ynvevlbvy.css';
import '../../css/f/fkib2bh7q.css';
import '../../css/m/mgqj16b7m.css';
import '../../css/q/qt0zi6vdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qkno46xxx"/><path class="ynvevlbvy"/><path class="fkib2bh7q"/><path class="mgqj16b7m"/><path class="qt0zi6vdr"/></g>`,
		"fallback": "streamline-cyber-color:lamp-3",
	});
}

export default Component;
