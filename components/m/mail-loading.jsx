import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fdb1-x1it.css';
import '../../css/b/bjip07bim.css';
import '../../css/n/npgtofvxz.css';
import '../../css/a/amickqvio.css';
import '../../css/v/v5fbimbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fdb1-x1it"/><path class="bjip07bim"/><path class="npgtofvxz"/><path class="amickqvio"/><path class="v5fbimbyb"/></g>`,
		"fallback": "streamline-sharp:mail-loading",
	});
}

export default Component;
