import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gdl-dbb1a.css';
import '../../css/d/dn6cinb6f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gdl-dbb1a"/><path class="dn6cinb6f"/></g>`,
		"fallback": "glyphs:note-medical-bold",
	});
}

export default Component;
