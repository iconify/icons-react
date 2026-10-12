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
		"content": `<style>.b6cxmx1du {
  d: path("M16 15.5h3");
}

.cjgdcfblg {
  d: path("M5 13h3m-3 3.5h3m6.46-6.21l2.33-2.33l.71-.71l.71.71l2.33 2.33l.71.71v10.25h-7.5V11z");
}

.hgokyw5en {
  d: path("m3.46 7.29l2.33-2.33l.71-.71l.71.71l2.33 2.33l.71.71v13.25h-7.5V8z");
}

.s2oga120n {
  cx: 6.5px;
  cy: 8.25px;
  r: 1px;
}

.tf2crlbaz {
  cx: 17.5px;
  cy: 11.25px;
  r: 1px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hgokyw5en"/><circle class="s2oga120n"/><path class="cjgdcfblg"/><circle class="tf2crlbaz"/><path class="b6cxmx1du"/></g>`,
		"fallback": "iconoven:price-compare-sharp",
	});
}

export default Component;
