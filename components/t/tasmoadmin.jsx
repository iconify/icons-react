import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp_egdbju.css';
import '../../css/n/nxo71mbmw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xp_egdbju"/><path class="nxo71mbmw"/>`,
		"fallback": "selfhst:tasmoadmin",
	});
}

export default Component;
