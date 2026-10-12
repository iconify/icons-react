import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbiulopcv.css';
import '../../css/m/mqaalvm4n.css';
import '../../css/t/twefmensu.css';
import '../../css/a/ad7qzcbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbiulopcv"/><path class="mqaalvm4n"/><rect class="twefmensu"/><path class="ad7qzcbfn"/></g>`,
		"fallback": "andrsrxn:pill-bottle",
	});
}

export default Component;
