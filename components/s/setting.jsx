import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/rzge4sb3y.css';
import '../../css/u/uowmflbel.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGO7QlTCPD"><g class="ufeehvblu"><path class="rzge4sb3y"/><path class="uowmflbel"/></g></mask></defs><path mask="url(#SVGO7QlTCPD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:setting",
	});
}

export default Component;
