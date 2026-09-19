import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vey1dxbgo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpGmnzbRE"><path class="vey1dxbgo"/></mask></defs><path mask="url(#SVGpGmnzbRE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:renault",
	});
}

export default Component;
