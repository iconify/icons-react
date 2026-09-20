import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g5w98gosp.css';
import '../../css/n/nxptrubgu.css';
import '../../css/q/qiio-gb5b.css';
import '../../css/m/m67h1vb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g5w98gosp"/><path class="nxptrubgu"/><path class="qiio-gb5b"/><path class="m67h1vb2d"/></g>`,
		"fallback": "streamline-freehand:modern-music-drums",
	});
}

export default Component;
