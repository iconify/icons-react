import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xvbk3hb0n.css';
import '../../css/t/tur_nnb9n.css';
import '../../css/m/mygfb2bqp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="xvbk3hb0n"/><path class="tur_nnb9n"/><path class="mygfb2bqp"/></g>`,
		"fallback": "glyphs-poly:note-pad-1",
	});
}

export default Component;
