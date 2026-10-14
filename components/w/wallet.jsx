import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tgumiwnon.css';
import '../../css/a/aik3ocb3t.css';
import '../../css/y/y5h7g0zml.css';
import '../../css/z/z7-_lxa9q.css';
import '../../css/l/lz_2t-b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tgumiwnon"/><path class="aik3ocb3t"/><path class="y5h7g0zml"/><path class="z7-_lxa9q"/><path class="lz_2t-b2y"/></g>`,
		"fallback": "matita:wallet",
	});
}

export default Component;
