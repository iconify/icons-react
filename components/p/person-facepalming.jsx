import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xag1dhbsb.css';
import '../../css/h/hr2fpzbrz.css';
import '../../css/a/a9bd9nbdk.css';
import '../../css/s/stq96wpzg.css';
import '../../css/i/ix1sa_osw.css';
import '../../css/j/jdeoueb8e.css';
import '../../css/x/x028fqb_f.css';
import '../../css/y/y4xat_4dw.css';
import '../../css/f/f2egsuujx.css';
import '../../css/c/crckubbpe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xag1dhbsb"/><path class="hr2fpzbrz"/><path class="a9bd9nbdk"/><path class="stq96wpzg"/><path class="ix1sa_osw"/><path class="jdeoueb8e"/><path class="x028fqb_f"/><path class="y4xat_4dw"/><path class="f2egsuujx"/><path class="crckubbpe"/></g>`,
		"fallback": "fluent-emoji-flat:person-facepalming",
	});
}

export default Component;
