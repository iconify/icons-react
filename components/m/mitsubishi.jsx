import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2_bfiwax.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtHWbAZui"><path class="a2_bfiwax"/></mask></defs><path mask="url(#SVGtHWbAZui)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mitsubishi",
	});
}

export default Component;
