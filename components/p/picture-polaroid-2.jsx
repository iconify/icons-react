import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/n/n5s0vjbjy.css';
import '../../css/e/e4qtjm49n.css';
import '../../css/p/p_m-jht1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="n5s0vjbjy"/><path class="e4qtjm49n"/><path class="p_m-jht1m"/></g>`,
		"fallback": "streamline-cyber:picture-polaroid-2",
	});
}

export default Component;
