import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t37pquajv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9IwYberl"><path class="t37pquajv"/></mask></defs><path mask="url(#SVG9IwYberl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shield",
	});
}

export default Component;
