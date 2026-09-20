import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-3lhcbzm.css';
import '../../css/k/kvngqrmke.css';
import '../../css/s/s_i4p2bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-3lhcbzm"/><path class="kvngqrmke"/><path class="s_i4p2bgm"/>`,
		"fallback": "token:lm",
	});
}

export default Component;
