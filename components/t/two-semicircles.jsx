import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_tzaabbz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCIj2QcHI"><path clip-rule="evenodd" class="h_tzaabbz"/></mask></defs><path mask="url(#SVGCIj2QcHI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:two-semicircles",
	});
}

export default Component;
