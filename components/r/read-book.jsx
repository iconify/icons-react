import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/toelsm_lh.css';
import '../../css/b/b6mu38bbk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHkqXab5u"><g class="rohhhzb0l"><path class="toelsm_lh"/><circle class="b6mu38bbk"/></g></mask></defs><path mask="url(#SVGHkqXab5u)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:read-book",
	});
}

export default Component;
