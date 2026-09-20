import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esmfkab9i.css';
import '../../css/l/l0hhqacfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="esmfkab9i"/><path clip-rule="evenodd" class="l0hhqacfa"/></g>`,
		"fallback": "streamline-sharp-color:waving-hand-flat",
	});
}

export default Component;
