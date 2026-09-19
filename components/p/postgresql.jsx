import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo5lmccvl.css';
import '../../css/p/p54bnaccc.css';
import '../../css/p/px847tbvl.css';
import '../../css/t/txado3aqj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo5lmccvl"/><path class="p54bnaccc"/><path class="px847tbvl"/><path class="txado3aqj"/>`,
		"fallback": "devicon:postgresql",
	});
}

export default Component;
