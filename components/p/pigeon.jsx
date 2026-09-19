import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbav1obyp.css';
import '../../css/w/wm8gb-9hv.css';
import '../../css/u/u2q07cbcb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVSzTtc9I"><g class="ft5dv1b6b"><path class="nbav1obyp"/><path class="wm8gb-9hv"/><circle class="u2q07cbcb"/></g></mask></defs><path mask="url(#SVGVSzTtc9I)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pigeon",
	});
}

export default Component;
