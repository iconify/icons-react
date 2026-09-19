import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni3z4obtq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmxdwiM4T"><path clip-rule="evenodd" class="ni3z4obtq"/></mask></defs><path mask="url(#SVGmxdwiM4T)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:next",
	});
}

export default Component;
