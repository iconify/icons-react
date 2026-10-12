import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts0-xfmio.css';
import '../../css/w/wj_a43n2k.css';
import '../../css/o/o9i8dnbvg.css';
import '../../css/a/as18zybxe.css';
import '../../css/y/yx7v9ppke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ts0-xfmio"/><rect class="wj_a43n2k"/><rect class="o9i8dnbvg"/><path class="as18zybxe"/><path class="yx7v9ppke"/></g>`,
		"fallback": "andrsrxn:replace",
	});
}

export default Component;
