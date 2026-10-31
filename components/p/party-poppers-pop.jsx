import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/a/a2htfsbbq.css';
import '../../css/d/dxmdg_owy.css';
import '../../css/y/y37mlabmf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="a2htfsbbq"/><path class="dxmdg_owy"/><path clip-rule="evenodd" class="y37mlabmf"/></g>`,
		"fallback": "streamline-kameleon-color:party-poppers-pop",
	});
}

export default Component;
