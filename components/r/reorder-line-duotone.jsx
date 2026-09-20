import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ncsx83b9b.css';
import '../../css/o/opf63ccaz.css';
import '../../css/h/h_-kaybie.css';
import '../../css/b/b-fd45bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ncsx83b9b"/><path class="opf63ccaz"/><path class="h_-kaybie"/><path class="b-fd45bwd"/></g>`,
		"fallback": "solar:reorder-line-duotone",
	});
}

export default Component;
