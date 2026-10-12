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
		"content": `<style>.f2e62lblo {
  d: path("M12.25 11.25a2.5 2.5 0 0 1-.5 4.5a1 1 0 0 1-.25-2l1.133-.423l-.883-.827Z");
}

.qxcmxt8oh {
  cx: 11px;
  cy: 10px;
  r: 1.75px;
}

.ublv9ocws {
  d: path("M11.13 20.4L3.6 8.1l-.554-.882l.904-.518a16 16 0 0 1 16.1 0l.904.518l-.554.882l-7.53 12.3l-.87 1.535z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ublv9ocws"/><circle class="qxcmxt8oh"/><path class="f2e62lblo"/></g>`,
		"fallback": "iconoven:ultrasound-baby-sharp",
	});
}

export default Component;
