import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lukals4wc.css';
import '../../css/u/u9zmojb0f.css';
import '../../css/k/kl2kn05lp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lukals4wc"/><path class="u9zmojb0f"/><path class="kl2kn05lp"/>`,
		"fallback": "selfhst:sharkord",
	});
}

export default Component;
