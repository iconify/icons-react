import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ctold-yvc.css';
import '../../css/x/x-ob6xq0l.css';
import '../../css/a/az5uuwbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ctold-yvc"/><path class="x-ob6xq0l"/><path class="az5uuwbxq"/></g>`,
		"fallback": "streamline-sharp:phone-personal-hotspot",
	});
}

export default Component;
