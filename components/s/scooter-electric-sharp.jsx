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
		"content": `<style>.adm1albkh {
  d: path("m2.95 14.77l.6-3.79l.2-1.23h6.75l.38 1.19l1.24 3.87l.38 1.19H2.75z");
}

.iaji0abaq {
  cx: 6.5px;
  cy: 18.5px;
  r: 2.25px;
}

.nbxv73-5j {
  cx: 18.75px;
  cy: 18.5px;
  r: 2.25px;
}

.nvgqe6zou {
  d: path("M8.25 11.25L6.75 13h2.5l-1.5 1.75M12.5 16h5.75m.03.3L16 5.5m-2 0h4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="adm1albkh"/><path class="nvgqe6zou"/><circle class="iaji0abaq"/><circle class="nbxv73-5j"/></g>`,
		"fallback": "iconoven:scooter-electric-sharp",
	});
}

export default Component;
