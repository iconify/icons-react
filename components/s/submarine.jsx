import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zk77vrvlr.css';
import '../../css/f/fabxojnqt.css';
import '../../css/t/teootboue.css';
import '../../css/a/afqrzkwcg.css';
import '../../css/f/f7tenortn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zk77vrvlr"/><path class="fabxojnqt"/><path class="teootboue"/><path class="afqrzkwcg"/><path class="f7tenortn"/></g>`,
		"fallback": "iconaut:submarine",
	});
}

export default Component;
