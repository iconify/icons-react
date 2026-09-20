import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb44leb3z.css';
import '../../css/s/s_dxuzqlj.css';
import '../../css/l/lct3agv3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb44leb3z"/><path class="s_dxuzqlj"/><path class="lct3agv3p"/>`,
		"fallback": "selfhst:visernic",
	});
}

export default Component;
