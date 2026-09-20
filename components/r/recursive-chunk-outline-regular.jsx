import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.d_noaebcy {
  d: path("M10 12h6");
}

.lsfr6dm2p {
  d: path("M12 15h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pty_wsbvs {
  d: path("M8 9h8");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="pty_wsbvs"/><path class="d_noaebcy"/><path class="lsfr6dm2p"/></g>`,
		"fallback": "iconmind:recursive-chunk-outline-regular",
	});
}

export default Component;
