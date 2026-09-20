import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eood56b1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eood56b1p"/>`,
		"fallback": "selfhst:meilisearch-dark",
	});
}

export default Component;
