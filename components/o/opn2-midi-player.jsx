import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a0k960bkz {
  cx: 31.882px;
  cy: 29.876px;
  r: 2.124px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.di26sdb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 13h35v22h-35zm2 0v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m-31 26v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m-35-20h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m35-18h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2");
}

.ptymqf9lw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.006 29.876v-9.441c3.014 0 4.494 1.52 4.494 4.72");
}
</style><path class="di26sdb5y"/><circle class="a0k960bkz"/><path class="ptymqf9lw"/>`,
		"fallback": "arcticons:opn2-midi-player",
	});
}

export default Component;
