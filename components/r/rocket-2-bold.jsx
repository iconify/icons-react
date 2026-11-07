import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjgo2gh2x.css';
import '../../css/g/g8oi6pbgw.css';
import '../../css/b/bpg1mxbva.css';
import '../../css/f/f123j2cib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cjgo2gh2x"/><path class="g8oi6pbgw"/><path class="bpg1mxbva"/><path clip-rule="evenodd" class="f123j2cib"/>`,
		"fallback": "solar:rocket-2-bold",
	});
}

export default Component;
