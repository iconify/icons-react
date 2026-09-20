import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqucqh5gk.css';
import '../../css/n/ns76v76mv.css';
import '../../css/p/p98nyhb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqucqh5gk"/><path class="ns76v76mv"/><path class="p98nyhb6h"/>`,
		"fallback": "streamline-freehand:modern-music-mix-touch",
	});
}

export default Component;
