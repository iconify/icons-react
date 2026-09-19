import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppbk3zbaq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGve42mdIb"><path class="ppbk3zbaq"/></mask></defs><path mask="url(#SVGve42mdIb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:square-small",
	});
}

export default Component;
