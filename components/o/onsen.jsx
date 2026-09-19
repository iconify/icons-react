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
		"content": `<style>.egpp2kbdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.788 24.99c5.577 2.43 7.245 6.087 4.227 9.263S31.887 39.5 24 39.5S9.003 37.429 5.985 34.253s-1.35-6.832 4.227-9.263");
}

.t2in9bcjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.729 8.5c-11.654 11.654 9.158 9.841-4 23m-3.499-23c-11.654 11.654 9.158 9.841-4 23m18.999-23c-11.654 11.654 9.158 9.841-4 23");
}
</style><path class="egpp2kbdi"/><path class="t2in9bcjx"/>`,
		"fallback": "arcticons:onsen",
	});
}

export default Component;
