import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io3b2ztit.css';
import '../../css/p/pyqtjkbsm.css';
import '../../css/k/kvf6v6b7p.css';
import '../../css/d/dxpvbvbyu.css';
import '../../css/r/rd_no8yio.css';
import '../../css/d/dup5mpwpg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGf7v4bdNb"><g class="ft5dv1b6b"><path class="io3b2ztit"/><circle class="pyqtjkbsm"/><path class="kvf6v6b7p"/><circle class="dxpvbvbyu"/><circle class="rd_no8yio"/><path class="dup5mpwpg"/></g></mask></defs><path mask="url(#SVGf7v4bdNb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:parenting-book",
	});
}

export default Component;
