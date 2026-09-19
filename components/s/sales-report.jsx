import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cp-yxsb5p.css';
import '../../css/x/xgzhx-b0o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfvIi6d5U"><g class="v3_i3wktz"><path class="cp-yxsb5p"/><path class="xgzhx-b0o"/></g></mask></defs><path mask="url(#SVGfvIi6d5U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sales-report",
	});
}

export default Component;
