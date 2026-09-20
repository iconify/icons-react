import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di3yhtbnj.css';
import '../../css/a/a2jx_gbww.css';
import '../../css/g/gq843hbzn.css';
import '../../css/x/x7okf09_u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="di3yhtbnj"><path clip-rule="evenodd" class="a2jx_gbww"/><path class="gq843hbzn"/></g><path clip-rule="evenodd" class="x7okf09_u"/>`,
		"fallback": "qlementine-icons:layer-2-16",
	});
}

export default Component;
