import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cu3fyt6mm.css';
import '../../css/g/gxwkom_rc.css';
import '../../css/d/dnqjlgdcj.css';
import '../../css/p/pimvocbrx.css';
import '../../css/c/cnetkpb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cu3fyt6mm"/><path class="gxwkom_rc"/><path class="dnqjlgdcj"/><path class="pimvocbrx"/><path class="cnetkpb_y"/></g>`,
		"fallback": "streamline-sharp-color:sharing-data",
	});
}

export default Component;
