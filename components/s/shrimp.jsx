import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kucgq7blm.css';
import '../../css/n/nwv7flbyu.css';
import '../../css/p/p14hulbxe.css';
import '../../css/r/rd_no8yio.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuNomPeQY"><g class="ft5dv1b6b"><path class="kucgq7blm"/><path class="nwv7flbyu"/><path class="p14hulbxe"/><circle class="rd_no8yio"/></g></mask></defs><path mask="url(#SVGuNomPeQY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shrimp",
	});
}

export default Component;
