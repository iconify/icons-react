import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yih83mira.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxYujDeIh"><path class="yih83mira"/></mask></defs><path mask="url(#SVGxYujDeIh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:left-two",
	});
}

export default Component;
