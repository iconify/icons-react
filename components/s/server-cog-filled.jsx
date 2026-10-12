import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kq-3wkbln.css';
import '../../css/a/acxbhmlvd.css';
import '../../css/c/czknjwb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kq-3wkbln"/><path class="acxbhmlvd"/><path class="czknjwb4y"/></g>`,
		"fallback": "lucide-extended:server-cog-filled",
	});
}

export default Component;
