import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lrvbxppol.css';
import '../../css/c/cwn1ivdog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lrvbxppol"/><path class="cwn1ivdog"/></g>`,
		"fallback": "streamline-sharp-color:one-finger-short-tap-flat",
	});
}

export default Component;
