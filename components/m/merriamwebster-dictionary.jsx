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
		"content": `<style>.ku83jqb8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.73 4.5H10.4a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h2.33m0-39v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2z");
}

.wza96jbes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.965 25.509l-2.4 8l-2.4-8l-2.4 8l-2.4-8m-1 .012h2m2.8 0h2m2.8 0h2m-10.8-3.039l1-7.991l4 8l4-7.988l1 7.988m-11-.009h2m8 0h2m-2-7.979h1m-10 0h1");
}
</style><path class="ku83jqb8i"/><path class="wza96jbes"/>`,
		"fallback": "arcticons:merriamwebster-dictionary",
	});
}

export default Component;
