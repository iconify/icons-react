import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7rg3yq0g.css';
import '../../css/w/wzoutn_0j.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7rg3yq0g"/><path class="wzoutn_0j"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:smartphone-check-48-bold",
	});
}

export default Component;
