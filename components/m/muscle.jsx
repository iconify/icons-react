import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8vwyjb2z.css';
import '../../css/l/lj_j-gbbi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG32PdTd8v"><g class="ft5dv1b6b"><path class="g8vwyjb2z"/><path class="lj_j-gbbi"/></g></mask></defs><path mask="url(#SVG32PdTd8v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:muscle",
	});
}

export default Component;
