import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tyut11btg.css';
import '../../css/g/gl9qqh_kw.css';
import '../../css/m/mvh69ib4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tyut11btg"/><path class="gl9qqh_kw"/><path class="mvh69ib4z"/></g>`,
		"fallback": "streamline-ultimate:smart-watch-square-location",
	});
}

export default Component;
