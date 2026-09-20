import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cyjh9-bdj.css';
import '../../css/z/zdc-vqb_y.css';
import '../../css/p/pj95wpiiq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cyjh9-bdj"/><path class="zdc-vqb_y"/><path class="pj95wpiiq"/></g>`,
		"fallback": "streamline-flex-color:trophy",
	});
}

export default Component;
