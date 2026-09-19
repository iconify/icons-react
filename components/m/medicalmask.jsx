import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb5dzpbru.css';
import '../../css/h/h8kldlbhr.css';
import '../../css/n/n-seofb-c.css';
import '../../css/m/m94ggluil.css';
import '../../css/p/pqto13t3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb5dzpbru"/><path class="h8kldlbhr"/><path class="n-seofb-c"/><path class="m94ggluil"/><path class="pqto13t3t"/>`,
		"fallback": "fxemoji:medicalmask",
	});
}

export default Component;
