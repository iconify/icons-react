import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trkobpb0u.css';
import '../../css/y/ym2n1ubxg.css';
import '../../css/s/sr1h5lzei.css';
import '../../css/c/cif8nnbzz.css';
import '../../css/b/b85x29w4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="trkobpb0u"/><rect class="ym2n1ubxg"/><path class="sr1h5lzei"/><rect class="cif8nnbzz"/><path class="b85x29w4r"/></g>`,
		"fallback": "andrsrxn:mouse-off",
	});
}

export default Component;
