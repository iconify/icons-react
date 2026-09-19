import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/h/h2xliqbhm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZiBm8ctK"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="h2xliqbhm"/></g></mask></defs><path mask="url(#SVGZiBm8ctK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:round-socket",
	});
}

export default Component;
