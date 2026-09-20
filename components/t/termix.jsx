import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufwqrnbxh.css';
import '../../css/p/pgs89cb6b.css';
import '../../css/s/s_6fbubyx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufwqrnbxh"/><path class="pgs89cb6b"/><path class="s_6fbubyx"/>`,
		"fallback": "selfhst:termix",
	});
}

export default Component;
