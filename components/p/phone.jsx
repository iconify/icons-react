import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ac7wvmh5x.css';
import '../../css/w/w8j8x2b3h.css';
import '../../css/g/gs_5-gc9x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCQzDUcoZ"><g class="rohhhzb0l"><path class="ac7wvmh5x"/><path class="w8j8x2b3h"/><path class="gs_5-gc9x"/></g></mask></defs><path mask="url(#SVGCQzDUcoZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone",
	});
}

export default Component;
