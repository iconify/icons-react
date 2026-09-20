import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fmm21sp8m.css';
import '../../css/n/ndb_4g3uw.css';
import '../../css/k/k9xpz9m6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fmm21sp8m"/><path class="ndb_4g3uw"/><path class="k9xpz9m6j"/></g>`,
		"fallback": "tabler:polaroid",
	});
}

export default Component;
