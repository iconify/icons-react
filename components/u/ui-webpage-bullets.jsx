import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u85aeivei.css';
import '../../css/m/m-7170blj.css';
import '../../css/b/btdqlqbzk.css';
import '../../css/b/bka8n3bzg.css';
import '../../css/m/mitcfcb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u85aeivei"/><path class="m-7170blj"/><path class="btdqlqbzk"/><path class="bka8n3bzg"/><path class="mitcfcb7d"/></g>`,
		"fallback": "streamline-freehand-color:ui-webpage-bullets",
	});
}

export default Component;
