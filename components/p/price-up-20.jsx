import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lae2_dgov.css';
import '../../css/z/znm6bw41g.css';
import '../../css/i/iiq2hgbgs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lae2_dgov"/><path class="znm6bw41g"/><path class="iiq2hgbgs"/>`,
		"fallback": "energy-icons:price-up-20",
	});
}

export default Component;
