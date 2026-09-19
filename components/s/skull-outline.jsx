import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmp9ddbhf.css';
import '../../css/k/kewmiqbmw.css';
import '../../css/d/dp4rysb_i.css';
import '../../css/m/mclf1pryu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmp9ddbhf"/><circle class="kewmiqbmw"/><circle class="dp4rysb_i"/><path class="mclf1pryu"/>`,
		"fallback": "famicons:skull-outline",
	});
}

export default Component;
