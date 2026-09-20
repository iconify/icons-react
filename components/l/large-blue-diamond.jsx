import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bjmytrbee {
  cx: 15.44px;
  cy: 60.48px;
  r: 3.3px;
  fill: var(--svg-color--90caf9, #90caf9);
}

.e9ijkbbmc {
  fill: var(--svg-color--2196f3, #2196f3);
  d: path("m64.64 10.47l48.5 48.4a7.27 7.27 0 0 1-.18 10.28l-.02.02l-48.4 48.5a7.42 7.42 0 0 1-10.49.01l-.01-.01l-48.3-48.5a7.28 7.28 0 0 1-.21-10.29l.01-.01l48.6-48.4a7.415 7.415 0 0 1 10.5 0c-.01-.01 0-.01 0 0");
}

.tw3m7s-ak {
  fill: var(--svg-color--1976d2, #1976d2);
  d: path("m69.54 6.37l52.2 52a7.887 7.887 0 0 1-.2 11.1l-52 52.2a7.99 7.99 0 0 1-11.3 0l-52-52.2a8 8 0 0 1-.2-11.1l52.2-52a7.99 7.99 0 0 1 11.3 0");
}

.zj0g3gbfl {
  fill: var(--svg-color--90caf9, #90caf9);
  d: path("M52.84 17.67c-1.6 1.1-33.1 32.3-33.1 32.3s-2.6 2.3-.8 4.7c1.7 2.2 4.3 1.1 5.6-.1s29.7-29 30.9-30.4a5.43 5.43 0 0 0 .6-5.5c-.8-1.6-2.1-1.8-3.2-1");
}
</style><path class="tw3m7s-ak"/><path class="e9ijkbbmc"/><path class="zj0g3gbfl"/><circle class="bjmytrbee"/>`,
		"fallback": "noto:large-blue-diamond",
	});
}

export default Component;
