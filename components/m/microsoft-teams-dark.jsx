import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggt1geb1l.css';
import '../../css/x/xr2facclf.css';
import '../../css/a/atnwqg8za.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggt1geb1l"/><path class="xr2facclf"/><path class="atnwqg8za"/>`,
		"fallback": "selfhst:microsoft-teams-dark",
	});
}

export default Component;
