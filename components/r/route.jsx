import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u_ne8n15q.css';
import '../../css/o/odnmdzi_x.css';
import '../../css/d/dorpla9vi.css';
import '../../css/x/xev9_4bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u_ne8n15q"/><path class="odnmdzi_x wm-k"/><path class="dorpla9vi wm-a"/><path class="wm-deco xev9_4bdv"/></g>`,
		"fallback": "withicons-kawaii:route",
	});
}

export default Component;
