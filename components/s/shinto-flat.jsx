import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p-8-f2bvq.css';
import '../../css/v/vxkpnsa5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p-8-f2bvq"/><path class="vxkpnsa5a"/></g>`,
		"fallback": "streamline-sharp-color:shinto-flat",
	});
}

export default Component;
