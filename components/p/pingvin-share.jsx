import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va62ij8gu.css';
import '../../css/t/t0cly4bsd.css';
import '../../css/c/cj1l5ubxv.css';
import '../../css/d/dgggh2b8d.css';
import '../../css/k/kauhh8s-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va62ij8gu"/><path class="t0cly4bsd"/><path class="cj1l5ubxv"/><path class="dgggh2b8d"/><path class="kauhh8s-b"/>`,
		"fallback": "selfhst:pingvin-share",
	});
}

export default Component;
