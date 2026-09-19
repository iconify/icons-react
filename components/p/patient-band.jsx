import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wmd9lmbwj.css';
import '../../css/f/fzyexpi6g.css';
import '../../css/m/mebbrxbhv.css';
import '../../css/j/jnficvbwd.css';
import '../../css/z/z996ppfqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wmd9lmbwj"/><path class="fzyexpi6g"/><path class="mebbrxbhv"/><path class="jnficvbwd"/><path class="z996ppfqz"/></g>`,
		"fallback": "healthicons:patient-band",
	});
}

export default Component;
