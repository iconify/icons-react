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
		"content": `<style>.pacwupxqz {
  d: path("M5.5 5.5h13v13h-13Z");
}

.swd2reb1r {
  d: path("m11.303 9.599l.077-1.044h1.24l.077 1.044l1.033.597l.943-.455l.62 1.073l-.865.59v1.192l.865.59l-.62 1.073l-.943-.455l-1.033.597l-.077 1.044h-1.24l-.077-1.044l-1.033-.597l-.943.455l-.62-1.073l.865-.59v-1.192l-.865-.59l.62-1.073l.943.455ZM2.5 9.5h3m-3 5h3m13-5h3m-3 5h3m-12-12v3m5-3v3m-5 13v3m5-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pacwupxqz"/><path class="swd2reb1r"/></g>`,
		"fallback": "uix-sharp:virtual-machine-code",
	});
}

export default Component;
