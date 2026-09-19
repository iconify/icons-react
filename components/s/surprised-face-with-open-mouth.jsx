import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/z/zfnawcc-o.css';
import '../../css/w/wl94-076k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdocDMcWg"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="zfnawcc-o"/><rect class="wl94-076k"/></g></mask></defs><path mask="url(#SVGdocDMcWg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:surprised-face-with-open-mouth",
	});
}

export default Component;
