import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/leth-abmf.css';
import '../../css/q/q5024hbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="leth-abmf"/><path class="q5024hbjd"/></g>`,
		"fallback": "streamline-sharp-color:song-recommendation-flat",
	});
}

export default Component;
