import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvbiv5ecy.css';
import '../../css/n/nkd99mgmf.css';
import '../../css/o/olxh2rbbv.css';
import '../../css/m/mgkqg4asu.css';
import '../../css/x/x_u_huq5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cvbiv5ecy"/><path class="nkd99mgmf"/><path class="olxh2rbbv"/><path class="mgkqg4asu"/><path class="x_u_huq5t"/></g>`,
		"fallback": "icon-park:remind-disable",
	});
}

export default Component;
