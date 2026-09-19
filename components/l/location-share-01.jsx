import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ypp_29btr.css';
import '../../css/g/gkxyxtbmf.css';
import '../../css/i/im7es_bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ypp_29btr"/><path class="gkxyxtbmf"/><path class="im7es_bhr"/></g>`,
		"fallback": "hugeicons:location-share-01",
	});
}

export default Component;
