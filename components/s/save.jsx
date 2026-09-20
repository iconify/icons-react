import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bnkim_jww.css';
import '../../css/w/wjg491cmr.css';
import '../../css/p/pl4wavb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bnkim_jww"/><path class="wjg491cmr"/><path class="pl4wavb8s"/></g>`,
		"fallback": "reicon:save",
	});
}

export default Component;
