import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dkr0e0w5v.css';
import '../../css/m/mqgl1bc0v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyDM9X1Xr"><g class="rohhhzb0l"><circle class="dkr0e0w5v"/><path class="mqgl1bc0v"/></g></mask></defs><path mask="url(#SVGyDM9X1Xr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:key-one",
	});
}

export default Component;
