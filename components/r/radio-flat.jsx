import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n341_qb-r.css';
import '../../css/p/p_raxdbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n341_qb-r"/><path clip-rule="evenodd" class="p_raxdbvq"/></g>`,
		"fallback": "streamline-sharp-color:radio-flat",
	});
}

export default Component;
