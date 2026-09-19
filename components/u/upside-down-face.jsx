import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/t-jsasqcq.css';
import '../../css/n/nxrnxobsk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwuglCczJ"><g class="ufeehvblu"><path class="t-jsasqcq"/><path class="nxrnxobsk"/></g></mask></defs><path mask="url(#SVGwuglCczJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:upside-down-face",
	});
}

export default Component;
