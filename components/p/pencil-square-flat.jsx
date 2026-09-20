import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p62y5wbmg.css';
import '../../css/w/wow7klb7u.css';
import '../../css/i/iskpd4wdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p62y5wbmg"/><path class="wow7klb7u"/><path class="iskpd4wdz"/></g>`,
		"fallback": "streamline-plump-color:pencil-square-flat",
	});
}

export default Component;
