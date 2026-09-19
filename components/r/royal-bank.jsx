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
		"content": `<style>.v0d89ya3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.445 27.78a7.5 7.5 0 0 1-1.031 1.37m0 0a7.5 7.5 0 0 1-1.377 1.138m-7.738.202a7.5 7.5 0 0 1-1.542-1.17m0 0a7.5 7.5 0 0 1-1.199-1.54m.008-7.572a7.5 7.5 0 0 1 1.197-1.533m0 0a7.5 7.5 0 0 1 1.536-1.163m7.736.2c.5.321.961.701 1.372 1.132m0 0a7.5 7.5 0 0 1 1.036 1.373m-10.135-2.69V5.5M5.5 20.218h12.078m1.2-1.53L5.938 5.847m22.096 24.441V42.5M42.5 27.772H30.43m-1.029 1.367l12.753 12.754m-14.12-24.176V5.5M42.5 20.218H30.44m-1.036-1.37l12.749-12.75M20.308 30.474V42.5M5.5 27.77h12.07m1.2 1.538L5.926 42.155");
}
</style><path class="v0d89ya3s"/>`,
		"fallback": "arcticons:royal-bank",
	});
}

export default Component;
