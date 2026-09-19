import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yw_2a4n5f.css';
import '../../css/m/ma4nqdb6e.css';
import '../../css/p/p1e355btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yw_2a4n5f"/><circle class="ma4nqdb6e"/><circle class="p1e355btg"/></g>`,
		"fallback": "hugeicons:share-02",
	});
}

export default Component;
