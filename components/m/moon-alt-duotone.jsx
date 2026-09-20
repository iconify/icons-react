import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgvjo9b1i.css';
import '../../css/z/zo2b48v8n.css';
import '../../css/s/sdob9xb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgvjo9b1i"/><path class="zo2b48v8n"/><path class="sdob9xb_h"/>`,
		"fallback": "lets-icons:moon-alt-duotone",
	});
}

export default Component;
