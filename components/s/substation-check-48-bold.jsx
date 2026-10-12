import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f78o86b_t.css';
import '../../css/z/zjk6qwb9u.css';
import '../../css/m/mv1gubbor.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f78o86b_t"/><path class="zjk6qwb9u"/><path class="mv1gubbor"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:substation-check-48-bold",
	});
}

export default Component;
