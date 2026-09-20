import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/i/i_3wtgbzk.css';
import '../../css/j/j8pzxabpy.css';
import '../../css/z/z0o2v5bey.css';
import '../../css/b/bdafg4bwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="i_3wtgbzk"/><path class="j8pzxabpy"/><path class="z0o2v5bey"/><path class="bdafg4bwl"/></g>`,
		"fallback": "streamline-kameleon-color:popcorn",
	});
}

export default Component;
