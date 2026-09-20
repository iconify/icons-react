import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvmue5hsj.css';
import '../../css/b/b8f7uhb9w.css';
import '../../css/b/bzhf89elo.css';
import '../../css/y/ymdxg_blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvmue5hsj"/><path class="b8f7uhb9w"/><path class="bzhf89elo"/><path class="ymdxg_blx"/></g>`,
		"fallback": "streamline-cyber-color:phone-merge",
	});
}

export default Component;
