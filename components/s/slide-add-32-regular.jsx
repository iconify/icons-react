import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i_c-uilzy {
  fill: currentColor;
  d: path("M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v8.843a9 9 0 0 0-2-1.828V8.5A2.5 2.5 0 0 0 25.5 6h-19A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26h8.012c.252.712.59 1.383 1.003 2H6.5A4.5 4.5 0 0 1 2 23.5zm21 22a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0");
}
</style><path class="i_c-uilzy"/>`,
		"fallback": "fluent:slide-add-32-regular",
	});
}

export default Component;
