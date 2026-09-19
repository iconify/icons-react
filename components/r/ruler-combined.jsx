import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfc9bdcxf.css';
import '../../css/i/il6rc2gzj.css';
import '../../css/d/dn2-j9bqd.css';
import '../../css/g/gxfmx94sn.css';
import '../../css/y/yrkpzdb-w.css';
import '../../css/n/n3dskdi5e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zfc9bdcxf"/><path class="il6rc2gzj"/><path class="dn2-j9bqd"/><path clip-rule="evenodd" class="gxfmx94sn"/><path class="yrkpzdb-w"/><path class="n3dskdi5e"/></g>`,
		"fallback": "glyphs-poly:ruler-combined",
	});
}

export default Component;
