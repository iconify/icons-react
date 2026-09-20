import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pghk_6agr.css';
import '../../css/b/bjjmfybva.css';
import '../../css/g/g2pydqbhs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pghk_6agr"/><path class="bjjmfybva"/><path clip-rule="evenodd" class="g2pydqbhs"/></g>`,
		"fallback": "streamline-plump-color:link-chain-flat",
	});
}

export default Component;
