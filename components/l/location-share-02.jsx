import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c3buayb6b.css';
import '../../css/i/im7es_bhr.css';
import '../../css/l/lbpdwbb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c3buayb6b"/><path class="im7es_bhr"/><path class="lbpdwbb-x"/></g>`,
		"fallback": "hugeicons:location-share-02",
	});
}

export default Component;
