import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqdsifbjo.css';
import '../../css/v/vvz-ixtom.css';
import '../../css/m/mrjrsknzt.css';
import '../../css/x/x_j1s6rfo.css';
import '../../css/v/vykv10bnv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqdsifbjo"/><path class="vvz-ixtom"/><path class="mrjrsknzt"/><path class="x_j1s6rfo"/><path class="vykv10bnv"/>`,
		"fallback": "selfhst:ksuite-docs",
	});
}

export default Component;
