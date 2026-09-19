import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/btc0ci6jt.css';
import '../../css/n/n9i8cmbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="power-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="btc0ci6jt"/><path class="n9i8cmbmc"/></g></g>`,
		"fallback": "cuida:power-outline",
	});
}

export default Component;
