import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kz767lbkx.css';
import '../../css/h/hrh2izb_y.css';
import '../../css/f/f2jxhypno.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCpDiAduO"><g class="ufeehvblu"><path class="kz767lbkx"/><path class="hrh2izb_y"/><path class="f2jxhypno"/></g></mask></defs><path mask="url(#SVGCpDiAduO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:table-file",
	});
}

export default Component;
