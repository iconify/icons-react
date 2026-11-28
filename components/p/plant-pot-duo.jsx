import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osbyf9bkz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dodmlfbpn.css';
import '../../css/v/v4bjme-6z.css';
import '../../css/j/j9m2trb9o.css';
import '../../css/g/ggzw_acmu.css';
import '../../css/o/ov9qbvzvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osbyf9bkz secondary"/><g class="dt0cm9dhy primary"><path class="dodmlfbpn"/><path class="v4bjme-6z"/><path class="j9m2trb9o"/><path class="ggzw_acmu"/><path class="ov9qbvzvi"/></g>`,
		"fallback": "iconaut:plant-pot-duo",
	});
}

export default Component;
