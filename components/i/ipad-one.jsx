import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/oparfqbfu.css';
import '../../css/z/z22cny1_q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4CunMdiG"><g class="rohhhzb0l"><rect class="oparfqbfu"/><path class="z22cny1_q"/></g></mask></defs><path mask="url(#SVG4CunMdiG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ipad-one",
	});
}

export default Component;
