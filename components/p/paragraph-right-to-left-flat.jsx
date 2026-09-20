import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lurau-bqx.css';
import '../../css/p/pc3w89bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lurau-bqx"/><path class="pc3w89bje"/></g>`,
		"fallback": "streamline-sharp-color:paragraph-right-to-left-flat",
	});
}

export default Component;
