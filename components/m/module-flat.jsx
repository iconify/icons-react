import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phja1rg0u.css';
import '../../css/i/iid2mgyih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phja1rg0u"/><path clip-rule="evenodd" class="iid2mgyih"/></g>`,
		"fallback": "streamline-sharp-color:module-flat",
	});
}

export default Component;
