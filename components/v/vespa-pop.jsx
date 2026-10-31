import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/v/veav182bc.css';
import '../../css/w/wp9qpgb8d.css';
import '../../css/w/wc7otjb2l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="veav182bc"/><path class="wp9qpgb8d"/><path class="wc7otjb2l"/></g>`,
		"fallback": "streamline-kameleon-color:vespa-pop",
	});
}

export default Component;
