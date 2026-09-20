import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhrkg_bze.css';
import '../../css/l/lkun31bgv.css';
import '../../css/d/dwpgg90mz.css';
import '../../css/k/kcn133bnm.css';
import '../../css/z/zd7u6ymjl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bhrkg_bze"/><path class="lkun31bgv"/><path class="dwpgg90mz"/><path class="kcn133bnm"/><path class="zd7u6ymjl"/></g>`,
		"fallback": "streamline-flex-color:recording-tape-bubble-circle",
	});
}

export default Component;
