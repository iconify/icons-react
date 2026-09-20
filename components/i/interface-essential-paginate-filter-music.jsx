import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x25w2h7el.css';
import '../../css/s/s54zkcb4g.css';
import '../../css/y/yipyoybdp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x25w2h7el"/><path class="s54zkcb4g"/><path class="yipyoybdp"/>`,
		"fallback": "streamline-pixel:interface-essential-paginate-filter-music",
	});
}

export default Component;
