import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4hpaif8m.css';
import '../../css/i/isboikbqw.css';
import '../../css/m/m-bfnubcl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d4hpaif8m"/><path class="isboikbqw"/><path class="m-bfnubcl"/></g>`,
		"fallback": "glyphs-poly:watch",
	});
}

export default Component;
