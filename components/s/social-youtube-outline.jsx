import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjqs9ia_t.css';
import '../../css/p/pofkdk1ny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjqs9ia_t"/><path class="pofkdk1ny"/>`,
		"fallback": "ion:social-youtube-outline",
	});
}

export default Component;
