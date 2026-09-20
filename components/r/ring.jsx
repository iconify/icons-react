import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/dmrb6-bhn.css';
import '../../css/b/bvvgrsbab.css';
import '../../css/q/qv9ol5b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="dmrb6-bhn"/><path class="bvvgrsbab"/><path class="qv9ol5b9r"/></g>`,
		"fallback": "streamline-sharp-color:ring",
	});
}

export default Component;
