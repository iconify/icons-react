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
		"content": `<style>.bi9x9vb5f {
  d: path("M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3M6.75 17h10.5m-14.5-5h4m10.5-1H20V5.25");
}

.tktpkt94z {
  d: path("M6.75 7.75h10.5v13.5H6.75z");
}

.urn-e0b9r {
  cx: 20px;
  cy: 4px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tktpkt94z"/><path class="bi9x9vb5f"/><circle class="urn-e0b9r"/></g>`,
		"fallback": "iconoven:pencil-sharpener-sharp",
	});
}

export default Component;
