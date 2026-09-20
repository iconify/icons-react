import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vz92u5bpe.css';
import '../../css/p/p_ydofvqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vz92u5bpe"/><path class="p_ydofvqb"/></g>`,
		"fallback": "streamline-ultimate:movies-reel",
	});
}

export default Component;
