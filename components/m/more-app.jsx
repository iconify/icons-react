import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ynfcuo-wb.css';
import '../../css/e/e_7i-ix1w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGX9MiJeJu"><g class="v3_i3wktz"><path class="ynfcuo-wb"/><path class="e_7i-ix1w"/></g></mask></defs><path mask="url(#SVGX9MiJeJu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:more-app",
	});
}

export default Component;
