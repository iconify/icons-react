import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d17mx3bfs.css';
import '../../css/z/zr5giubst.css';
import '../../css/z/z01z8_btg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d17mx3bfs"/><path class="zr5giubst"/><path class="z01z8_btg"/>`,
		"fallback": "energy-icons:type-20",
	});
}

export default Component;
