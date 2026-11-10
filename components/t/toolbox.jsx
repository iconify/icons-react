import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmg5fxyxy.css';
import '../../css/k/kl1ktqbha.css';
import '../../css/m/m0bp3hbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qmg5fxyxy"/><path class="kl1ktqbha"/><path class="m0bp3hbxo"/></g>`,
		"fallback": "andrsrxn:toolbox",
	});
}

export default Component;
