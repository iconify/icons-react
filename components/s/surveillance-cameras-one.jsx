import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pjotv2p9i.css';
import '../../css/s/s13znbc5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGY1W7leOk"><g class="rohhhzb0l"><path class="pjotv2p9i"/><path class="s13znbc5y"/></g></mask></defs><path mask="url(#SVGY1W7leOk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:surveillance-cameras-one",
	});
}

export default Component;
