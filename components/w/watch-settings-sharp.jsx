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
		"content": `<style>.byh9n2bqq {
  d: path("M5.75 6.25h12.5v11.5H5.75zm3 0l.5-3.5h5.5l.5 3.5m-6.5 11.5l.5 3.5h5.5l.5-3.5");
}

.dm2uewa9g {
  d: path("M12 9.25V12l1.75 1.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="byh9n2bqq"/><path class="dm2uewa9g"/></g>`,
		"fallback": "iconoven:watch-settings-sharp",
	});
}

export default Component;
