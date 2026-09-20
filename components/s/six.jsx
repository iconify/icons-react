import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs770bsej.css';
import '../../css/z/ztyr4ccyb.css';
import '../../css/q/q8nk54bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs770bsej"/><path class="ztyr4ccyb"/><path class="q8nk54bpo"/>`,
		"fallback": "token:six",
	});
}

export default Component;
