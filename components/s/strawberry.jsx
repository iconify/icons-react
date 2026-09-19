import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kiupaqbzj.css';
import '../../css/d/dztf14bjn.css';
import '../../css/l/l_pmafbfa.css';
import '../../css/c/c-zlgbb5i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kiupaqbzj"/><path class="dztf14bjn"/><path class="l_pmafbfa"/><path class="c-zlgbb5i"/></g>`,
		"fallback": "fluent-emoji-flat:strawberry",
	});
}

export default Component;
