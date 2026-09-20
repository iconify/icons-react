import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfa47j6vc.css';
import '../../css/d/d-n5niaps.css';
import '../../css/w/wi19v5bsv.css';
import '../../css/e/evbksexjs.css';
import '../../css/s/sri6s-bff.css';
import '../../css/b/bsusqz6jj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<filter id="SVGqReBxIRF" width="140%" height="140%" x="-20%" y="-20%"><feGaussianBlur result="blur" stdDeviation="1"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><path class="rfa47j6vc"/><path class="d-n5niaps"/><path class="wi19v5bsv"/><path class="evbksexjs"/><path class="sri6s-bff"/><g filter="url(#SVGqReBxIRF)"><path class="bsusqz6jj"/></g>`,
		"fallback": "selfhst:tracearr",
	});
}

export default Component;
