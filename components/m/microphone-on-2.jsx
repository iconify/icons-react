import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/tk2xyenqp.css';
import '../../css/z/z9719314l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="tk2xyenqp"/><path class="z9719314l"/></g>`,
		"fallback": "streamline-cyber:microphone-on-2",
	});
}

export default Component;
