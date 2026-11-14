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
		"content": `<style>.u92x6rb3f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 2.75h12q3.25 0 3.25 3.25v9q0 3.25-3.25 3.25h-7.718l-3.788 3.314q-.112.099-.254.146q-.141.048-.29.038t-.282-.076q-.134-.066-.232-.178q-.09-.103-.138-.23q-.048-.128-.048-.264v-2.799Q2.75 17.85 2.75 15V6q0-3.25 3.25-3.25m2.641 4.391Q7.25 8.532 7.25 10.5t1.391 3.359T12 15.25t3.359-1.391T16.75 10.5t-1.391-3.359T12 5.75T8.641 7.141");
}
</style><path class="u92x6rb3f"/>`,
		"fallback": "uix-solid:intent-detect",
	});
}

export default Component;
