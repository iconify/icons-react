import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr8pq4ldz.css';
import '../../css/n/nx5pacs2e.css';
import '../../css/k/k-03aib7l.css';
import '../../css/w/wjfxtcc_c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr8pq4ldz"/><path class="nx5pacs2e"/><path class="k-03aib7l"/><path class="wjfxtcc_c"/>`,
		"fallback": "openmoji:railway-track",
	});
}

export default Component;
