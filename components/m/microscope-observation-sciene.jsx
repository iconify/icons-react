import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/he0kqrarb.css';
import '../../css/m/mv22pbpqt.css';
import '../../css/g/gixm9ebqf.css';
import '../../css/u/u6y-by0df.css';
import '../../css/t/t3j_37mnz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="he0kqrarb"/><path class="mv22pbpqt"/><path class="gixm9ebqf"/><path class="u6y-by0df"/><path class="t3j_37mnz"/></g>`,
		"fallback": "streamline-plump-color:microscope-observation-sciene",
	});
}

export default Component;
