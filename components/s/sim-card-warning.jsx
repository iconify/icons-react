import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6i3uccox.css';
import '../../css/e/e8fdbvbtx.css';
import '../../css/v/vv2alzb_p.css';
import '../../css/a/ap4acab4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x6i3uccox"/><path class="e8fdbvbtx"/><path class="vv2alzb_p"/><path class="ap4acab4w"/></g>`,
		"fallback": "andrsrxn:sim-card-warning",
	});
}

export default Component;
