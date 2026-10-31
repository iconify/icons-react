import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/p/plw4my99i.css';
import '../../css/n/ndsoh9bgy.css';
import '../../css/w/w4lc2xbcv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="plw4my99i"/><path class="ndsoh9bgy"/><path class="w4lc2xbcv"/>`,
		"fallback": "tabler-flags:sudan",
	});
}

export default Component;
