import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4xorccrs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgtGe9uAZ"><path class="h4xorccrs"/></mask></defs><path mask="url(#SVGgtGe9uAZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sum",
	});
}

export default Component;
