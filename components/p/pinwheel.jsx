import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_c634jky.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhhMGxOsy"><path class="h_c634jky"/></mask></defs><path mask="url(#SVGhhMGxOsy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pinwheel",
	});
}

export default Component;
