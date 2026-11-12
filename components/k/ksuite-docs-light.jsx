import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw2m33brc.css';
import '../../css/h/h78ewob-k.css';
import '../../css/p/pg98fbbdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw2m33brc"/><path class="h78ewob-k"/><path class="pg98fbbdj"/>`,
		"fallback": "selfhst:ksuite-docs-light",
	});
}

export default Component;
