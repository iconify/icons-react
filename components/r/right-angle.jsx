import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-8-qhbnp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGn3H0fbpu"><path clip-rule="evenodd" class="n-8-qhbnp"/></mask></defs><path mask="url(#SVGn3H0fbpu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:right-angle",
	});
}

export default Component;
