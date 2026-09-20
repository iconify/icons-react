import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pzk_dx7le.css';
import '../../css/o/ovukmybdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pzk_dx7le"/><path class="ovukmybdh"/></g>`,
		"fallback": "streamline-sharp-color:lift-flat",
	});
}

export default Component;
