import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvl1ieach.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSTYrZqfb"><path class="cvl1ieach"/></mask></defs><path mask="url(#SVGSTYrZqfb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:octagon",
	});
}

export default Component;
