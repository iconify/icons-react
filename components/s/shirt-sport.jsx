import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dfyl8ii5t.css';
import '../../css/b/b1ojnacad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dfyl8ii5t"/><path class="b1ojnacad"/></g>`,
		"fallback": "tabler:shirt-sport",
	});
}

export default Component;
