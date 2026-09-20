import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sacl49i0j.css';
import '../../css/f/fv1pvlf1q.css';
import '../../css/q/qi3bd4p2i.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sacl49i0j"/><path class="fv1pvlf1q"/><path class="qi3bd4p2i"/>`,
		"fallback": "lineicons:rss-right",
	});
}

export default Component;
