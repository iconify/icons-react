import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/apidz6brj.css';
import '../../css/i/iji07ubvv.css';
import '../../css/z/z4n__z8-t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="apidz6brj"/><path class="iji07ubvv"/><path class="z4n__z8-t"/></g>`,
		"fallback": "glyphs-poly:seek-skip-1",
	});
}

export default Component;
