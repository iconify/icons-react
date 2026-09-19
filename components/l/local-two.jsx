import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/ucv-pibjs.css';
import '../../css/c/co9te6vwq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdKRUdeVA"><g class="ufeehvblu"><path class="ucv-pibjs"/><path class="co9te6vwq"/></g></mask></defs><path mask="url(#SVGdKRUdeVA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:local-two",
	});
}

export default Component;
