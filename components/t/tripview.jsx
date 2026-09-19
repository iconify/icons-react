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
		"content": `<style>.fj53qwgxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.013 4.5h19.72v22.765h-19.72zm0 15.167h19.72m-9.86.006v7.592m7.182 3.702L35.207 43.5M16.956 30.967L12.793 43.5m2.937-8.84h16.548m-18.186 4.929H33.89");
}
</style><path class="fj53qwgxq"/>`,
		"fallback": "arcticons:tripview",
	});
}

export default Component;
