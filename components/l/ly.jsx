import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7aiq4xgk.css';
import '../../css/o/o_kiupjve.css';
import '../../css/p/p2bnd3k9f.css';
import '../../css/z/zolxqsb7l.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i7aiq4xgk"/><path class="o_kiupjve"/><path class="p2bnd3k9f"/><path class="zolxqsb7l"/></g>`,
		"fallback": "cif:ly",
	});
}

export default Component;
