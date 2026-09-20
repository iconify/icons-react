import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re-9-t6rq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re-9-t6rq"/>`,
		"fallback": "selfhst:meilisearch-light",
	});
}

export default Component;
