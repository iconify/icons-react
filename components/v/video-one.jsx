import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/p/pw0h5xb-x.css';
import '../../css/a/arpc54blb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU7xZCb3N"><g class="adexpl72i"><path class="pw0h5xb-x"/><circle class="arpc54blb"/></g></mask></defs><path mask="url(#SVGU7xZCb3N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:video-one",
	});
}

export default Component;
