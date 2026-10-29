import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d0dcmrbxa.css';
import '../../css/h/h2v4rg05k.css';
import '../../css/i/i6138id3q.css';
import '../../css/y/yrjl_cbrj.css';
import '../../css/x/xhfwlqbxc.css';
import '../../css/a/am9h9cbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d0dcmrbxa"/><path class="h2v4rg05k wm-a"/><path class="i6138id3q wm-a"/><path class="wm-a yrjl_cbrj"/><path class="wm-s xhfwlqbxc"/><path class="am9h9cbcf wm-a"/></g>`,
		"fallback": "withicons:snowman",
	});
}

export default Component;
