import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xrvg61rmh.css';
import '../../css/f/f09buvbhx.css';
import '../../css/e/e7yfwzb-i.css';
import '../../css/b/bhm_s360t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0jWV4dMU"><g class="aql7dnt-u"><path class="xrvg61rmh"/><path class="f09buvbhx"/><path class="e7yfwzb-i"/><circle class="bhm_s360t"/></g></mask></defs><path mask="url(#SVG0jWV4dMU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:led-diode",
	});
}

export default Component;
