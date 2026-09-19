import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xemra3bhx.css';
import '../../css/v/vfn6b26gs.css';
import '../../css/n/njdlg4bft.css';
import '../../css/v/vmc9b_bpg.css';
import '../../css/s/syv5jmb2w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xemra3bhx"/><path class="vfn6b26gs"/><path clip-rule="evenodd" class="njdlg4bft"/><path class="vmc9b_bpg"/><path clip-rule="evenodd" class="syv5jmb2w"/></g>`,
		"fallback": "glyphs-poly:pharmacy-1",
	});
}

export default Component;
