import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur154rbom.css';
import '../../css/w/wsnaudczl.css';
import '../../css/n/ns55fvgze.css';
import '../../css/p/pidhzkbvr.css';
import '../../css/t/tkgdfdb6x.css';
import '../../css/l/l-8m-rb-p.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged ur154rbom"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged wsnaudczl"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged ns55fvgze"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged pidhzkbvr"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged tkgdfdb6x"/><path class="clr-i-outline--badged clr-i-outline-path-6--badged l-8m-rb-p"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-7--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:license-outline-badged",
	});
}

export default Component;
