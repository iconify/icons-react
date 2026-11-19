import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uch0cfbie.css';
import '../../css/z/zrajuk4aj.css';
import '../../css/p/pmpmbebsu.css';
import '../../css/z/za26ylzpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uch0cfbie"/><path class="zrajuk4aj"/><path class="pmpmbebsu"/><path class="za26ylzpd"/></g>`,
		"fallback": "andrsrxn:vram",
	});
}

export default Component;
