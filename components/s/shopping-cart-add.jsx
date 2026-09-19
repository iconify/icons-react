import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fx319o55e.css';
import '../../css/n/n148kwbte.css';
import '../../css/d/d8dbn7bpp.css';
import '../../css/i/igkx63b1j.css';
import '../../css/p/p0lncxbde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fx319o55e"/><path class="n148kwbte"/><circle class="d8dbn7bpp"/><circle class="igkx63b1j"/><path class="p0lncxbde"/></g>`,
		"fallback": "icon-park-outline:shopping-cart-add",
	});
}

export default Component;
