import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cwi9jf16v.css';
import '../../css/h/hhy6b2bre.css';
import '../../css/k/kikd_09-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGb9GG3dpr"><g class="ufeehvblu"><rect class="cwi9jf16v"/><path class="hhy6b2bre"/><path class="kikd_09-e"/></g></mask></defs><path mask="url(#SVGb9GG3dpr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:transaction-order",
	});
}

export default Component;
