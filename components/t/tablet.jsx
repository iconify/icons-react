import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bal25inyd.css';
import '../../css/d/d1kdlidso.css';
import '../../css/i/itkrzdlol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bal25inyd"/><path class="d1kdlidso"/><path class="itkrzdlol"/></g>`,
		"fallback": "tdesign:tablet",
	});
}

export default Component;
