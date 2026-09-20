import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/v928_xtgy.css';
import '../../css/f/f1cguubie.css';
import '../../css/a/as7ag7hfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="v928_xtgy"/><path class="f1cguubie"/><path class="as7ag7hfk"/></g>`,
		"fallback": "streamline-cyber:tetris",
	});
}

export default Component;
