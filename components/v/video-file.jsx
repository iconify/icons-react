import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qgeq1yd2g.css';
import '../../css/i/ilw2i8vqp.css';
import '../../css/g/g1h9-5bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="qgeq1yd2g"/><path class="ilw2i8vqp"/><path class="g1h9-5bhu"/></g>`,
		"fallback": "lets-icons:video-file",
	});
}

export default Component;
