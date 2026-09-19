import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xr5qhnbxd.css';
import '../../css/w/wwb7e_b9q.css';
import '../../css/g/g4oh7sjkc.css';
import '../../css/o/ohjhefb8s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xr5qhnbxd"/><path class="wwb7e_b9q"/><path class="g4oh7sjkc"/><path class="ohjhefb8s"/></g>`,
		"fallback": "glyphs-poly:pencil-paintbrush",
	});
}

export default Component;
