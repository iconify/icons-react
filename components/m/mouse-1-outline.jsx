import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zx-8yob4q.css';
import '../../css/u/u86dwhbsn.css';
import '../../css/t/tnlmsebze.css';
import '../../css/z/z6ylehhen.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zx-8yob4q"/><path class="u86dwhbsn"/><path class="tnlmsebze"/><path class="z6ylehhen"/></g>`,
		"fallback": "glyphs:mouse-1-outline",
	});
}

export default Component;
