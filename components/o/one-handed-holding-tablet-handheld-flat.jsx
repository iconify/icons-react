import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm-_8-bls.css';
import '../../css/u/u-w-gzbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dm-_8-bls"/><path class="u-w-gzbsp"/></g>`,
		"fallback": "streamline-sharp-color:one-handed-holding-tablet-handheld-flat",
	});
}

export default Component;
