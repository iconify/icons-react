import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6cc3pb_a.css';
import '../../css/l/lj1xk3bxv.css';
import '../../css/a/aefmnnbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r6cc3pb_a"/><path class="lj1xk3bxv"/><path class="aefmnnbnd"/></g>`,
		"fallback": "keyline-icons:traffic-light-two-tone",
	});
}

export default Component;
