import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dn5joqb2b.css';
import '../../css/l/lqwcol_8m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNbbQMcwu"><g class="v3_i3wktz"><path class="dn5joqb2b"/><path class="lqwcol_8m"/></g></mask></defs><path mask="url(#SVGNbbQMcwu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:report",
	});
}

export default Component;
