import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zkb-edy8n.css';
import '../../css/u/u3qsncrba.css';
import '../../css/z/zqtjw2ejn.css';
import '../../css/x/x9lvmbcxu.css';
import '../../css/u/uqqo67wig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zkb-edy8n"/><path class="u3qsncrba"/><path class="zqtjw2ejn"/><path class="x9lvmbcxu"/><path class="uqqo67wig"/></g>`,
		"fallback": "solar:ssd-square-line-duotone",
	});
}

export default Component;
