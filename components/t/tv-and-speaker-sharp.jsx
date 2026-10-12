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
		"content": `<style>.ale78vxte {
  d: path("M4.75 3.25h16.5v4H9.75v9h-7v-13zm1 13v2.5m-3 0h6");
}

.rjh8_qiqc {
  cx: 17px;
  cy: 16.25px;
  r: 1.75px;
}

.s673k8b-c {
  d: path("M12.75 10.25h8.5v11h-8.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ale78vxte"/><path class="s673k8b-c"/><circle class="rjh8_qiqc"/></g>`,
		"fallback": "iconoven:tv-and-speaker-sharp",
	});
}

export default Component;
