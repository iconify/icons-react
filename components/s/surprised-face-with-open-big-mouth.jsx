import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/z/zfnawcc-o.css';
import '../../css/u/ug-fbvb6v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCO5X8dxi"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="zfnawcc-o"/><rect class="ug-fbvb6v"/></g></mask></defs><path mask="url(#SVGCO5X8dxi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:surprised-face-with-open-big-mouth",
	});
}

export default Component;
