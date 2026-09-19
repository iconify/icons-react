import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn6bq-bwq.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn6bq-bwq"/>`,
		"fallback": "zmdi:local-drink",
	});
}

export default Component;
