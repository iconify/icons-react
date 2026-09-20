import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tanozvbke.css';
import '../../css/b/bg3d8wbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tanozvbke"/><path class="bg3d8wbsl"/></g>`,
		"fallback": "streamline-sharp-color:shinto",
	});
}

export default Component;
