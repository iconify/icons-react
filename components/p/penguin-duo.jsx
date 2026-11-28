import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2elbacld.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/puh695b-r.css';
import '../../css/g/gy6t8qprz.css';
import '../../css/e/eyw9bdcdh.css';
import '../../css/d/dmqs4bbjm.css';
import '../../css/v/v6fglctjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2elbacld secondary"/><g class="dt0cm9dhy primary"><path class="puh695b-r"/><path class="gy6t8qprz"/><path class="eyw9bdcdh"/><path class="dmqs4bbjm"/><path class="v6fglctjz"/></g>`,
		"fallback": "iconaut:penguin-duo",
	});
}

export default Component;
