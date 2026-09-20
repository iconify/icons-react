import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vhg8nac8h.css';
import '../../css/g/gq1tqbm2t.css';
import '../../css/k/kijgnoboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vhg8nac8h"/><path class="gq1tqbm2t"/><path class="kijgnoboc"/></g>`,
		"fallback": "reicon:tornado2-duotone",
	});
}

export default Component;
