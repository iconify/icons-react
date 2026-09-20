import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/s1-q74bch.css';
import '../../css/c/cdl3xs5nh.css';
import '../../css/y/y-g3wxren.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="s1-q74bch"/><path class="cdl3xs5nh"/><path class="y-g3wxren"/></g>`,
		"fallback": "streamline-cyber:presentation-counter-2",
	});
}

export default Component;
