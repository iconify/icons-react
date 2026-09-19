import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/n9u55jbjq.css';
import '../../css/c/cmtd2kblp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="n9u55jbjq"/><path class="cmtd2kblp"/></g>`,
		"fallback": "icon-park:local-two",
	});
}

export default Component;
