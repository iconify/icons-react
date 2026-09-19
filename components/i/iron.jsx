import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rx43e1bfa.css';
import '../../css/v/vlgv0-bvw.css';
import '../../css/o/objzx55lf.css';
import '../../css/o/ovfruoqwj.css';
import '../../css/d/d6du39bor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="rx43e1bfa"/><path class="vlgv0-bvw"/><path class="objzx55lf"/><path class="ovfruoqwj"/><path class="d6du39bor"/></g>`,
		"fallback": "icon-park:iron",
	});
}

export default Component;
