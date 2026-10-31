import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jtkq8jb8r.css';
import '../../css/c/cbjo6dsyc.css';
import '../../css/c/c1xzn3b5a.css';
import '../../css/s/sxdzfouvy.css';
import '../../css/b/brj5hsq7d.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jtkq8jb8r"/><path class="cbjo6dsyc wm-shine"/><path class="c1xzn3b5a wm-k"/><path class="sxdzfouvy wm-a"/><path class="brj5hsq7d wm-s"/><path class="wm-deco yuobg4bux"/></g>`,
		"fallback": "withicons-kawaii:sunrise",
	});
}

export default Component;
