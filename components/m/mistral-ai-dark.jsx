import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs4eg3b5w.css';
import '../../css/k/krihi8bah.css';
import '../../css/i/i6ci4aclc.css';
import '../../css/b/bc6c6rbzb.css';
import '../../css/r/rqvlhza_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs4eg3b5w"/><path class="krihi8bah"/><path class="i6ci4aclc"/><path class="bc6c6rbzb"/><path class="rqvlhza_d"/>`,
		"fallback": "selfhst:mistral-ai-dark",
	});
}

export default Component;
