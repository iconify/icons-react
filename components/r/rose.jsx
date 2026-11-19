import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-tmlqbxw.css';
import '../../css/g/gzwfp9bak.css';
import '../../css/j/jhao2ohtb.css';
import '../../css/l/l5ou6hwwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j-tmlqbxw"/><path class="gzwfp9bak"/><path class="jhao2ohtb"/><path class="l5ou6hwwk"/></g>`,
		"fallback": "andrsrxn:rose",
	});
}

export default Component;
