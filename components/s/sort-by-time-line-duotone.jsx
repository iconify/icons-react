import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o9_okin1f.css';
import '../../css/j/j5e8npbes.css';
import '../../css/r/ra4u4oiby.css';
import '../../css/b/byu9zgdxu.css';
import '../../css/e/eonjggvry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o9_okin1f"/><path class="j5e8npbes"/><path class="ra4u4oiby"/><circle class="byu9zgdxu"/><path class="eonjggvry"/></g>`,
		"fallback": "solar:sort-by-time-line-duotone",
	});
}

export default Component;
