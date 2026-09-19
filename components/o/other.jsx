import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ay2w_abpx.css';
import '../../css/i/im606fb2m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjZrYZb2x"><g class="rohhhzb0l"><path class="ay2w_abpx"/><path class="im606fb2m"/></g></mask></defs><path mask="url(#SVGjZrYZb2x)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:other",
	});
}

export default Component;
