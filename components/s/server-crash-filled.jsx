import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_kar_p7d.css';
import '../../css/d/dr2vos38o.css';
import '../../css/p/p57dgccqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q_kar_p7d"/><path class="dr2vos38o"/><path clip-rule="evenodd" class="p57dgccqu"/>`,
		"fallback": "lucide-extended:server-crash-filled",
	});
}

export default Component;
