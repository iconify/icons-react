import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvn7b8phk.css';
import '../../css/h/h07qv5bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvn7b8phk"/><path class="h07qv5bvq"/>`,
		"fallback": "streamline-ultimate:multiple-neutral-2-bold",
	});
}

export default Component;
