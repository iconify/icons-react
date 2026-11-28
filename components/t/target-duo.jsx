import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geqzyob2p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/riz3hy1-t.css';
import '../../css/y/y9ufshblj.css';
import '../../css/z/zrlh-6b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geqzyob2p secondary"/><g class="dt0cm9dhy primary"><circle class="riz3hy1-t"/><circle class="y9ufshblj"/><path class="zrlh-6b7n"/></g>`,
		"fallback": "iconaut:target-duo",
	});
}

export default Component;
