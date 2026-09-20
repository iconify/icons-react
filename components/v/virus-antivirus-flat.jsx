import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y9sga_b0f.css';
import '../../css/f/f5k-x6xzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y9sga_b0f"/><path class="f5k-x6xzw"/></g>`,
		"fallback": "streamline-sharp-color:virus-antivirus-flat",
	});
}

export default Component;
