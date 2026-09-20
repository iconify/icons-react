import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zs160ef1r.css';
import '../../css/b/boyzpbbgo.css';
import '../../css/u/u2nr6gbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zs160ef1r"/><path class="boyzpbbgo"/><path class="u2nr6gbxp"/></g>`,
		"fallback": "streamline-cyber:microphone-jack",
	});
}

export default Component;
