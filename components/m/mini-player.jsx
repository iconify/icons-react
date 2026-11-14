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
		"content": `<style>.agyq-23fr {
  d: path("m15 13.5l6.5 4.25L15 22Z");
}

.jdz99q_zk {
  d: path("M12.2 16H2.5V3h19v11.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jdz99q_zk"/><path class="agyq-23fr"/></g>`,
		"fallback": "uix-sharp:mini-player",
	});
}

export default Component;
