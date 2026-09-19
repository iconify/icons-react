import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/eemzleb_p.css';
import '../../css/r/rh_-z7bfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="eemzleb_p"/><path class="rh_-z7bfj"/></g>`,
		"fallback": "icon-park:level",
	});
}

export default Component;
