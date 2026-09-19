import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyw2t8n3g.css';
import '../../css/f/fqmfpk6cs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyw2t8n3g"/><path class="fqmfpk6cs"/>`,
		"fallback": "famicons:refresh",
	});
}

export default Component;
