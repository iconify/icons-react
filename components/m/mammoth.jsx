import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6o9_ceuz.css';
import '../../css/y/yp64leb0e.css';
import '../../css/x/xqtg35cxk.css';
import '../../css/l/lhb696b2h.css';
import '../../css/m/mahn_1wed.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6o9_ceuz"/><path class="yp64leb0e"/><path class="xqtg35cxk"/><path class="lhb696b2h"/><path class="mahn_1wed"/></g>`,
		"fallback": "fluent-emoji-flat:mammoth",
	});
}

export default Component;
