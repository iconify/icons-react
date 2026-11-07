import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqc0waccm.css';
import '../../css/q/qzwenoa2o.css';
import '../../css/y/ys6ptrd3a.css';
import '../../css/z/z2s2x3bdu.css';
import '../../css/g/g0016m7ke.css';
import '../../css/y/y-47q73en.css';
import '../../css/c/cdthvjbzg.css';
import '../../css/r/r0reh58ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cqc0waccm"/><path clip-rule="evenodd" class="qzwenoa2o"/><path clip-rule="evenodd" class="ys6ptrd3a"/><path class="z2s2x3bdu"/><path class="g0016m7ke"/><path class="y-47q73en"/><path class="cdthvjbzg"/><path class="r0reh58ta"/>`,
		"fallback": "solar:qr-code-bold",
	});
}

export default Component;
