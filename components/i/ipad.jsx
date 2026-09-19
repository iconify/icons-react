import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/f3xnzb_sh.css';
import '../../css/g/g-a3yvbzf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfQPYedKa"><g class="rohhhzb0l"><rect class="f3xnzb_sh"/><path class="g-a3yvbzf"/></g></mask></defs><path mask="url(#SVGfQPYedKa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ipad",
	});
}

export default Component;
