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
		"content": `<style>.cs1n8lbgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.53 18.77L4.5 34.176h7.024l3.455-6.502L24 34.356");
}

.fttck0yws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.47 18.77l8.03 15.406h-7.024l-3.455-6.502L24 34.356");
}

.hwftn4b8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.945 27.085V18.77h7.525l.772 1.481h6.764v-6.607H4.994v6.607h6.764l.772-1.481h7.525v8.315z");
}
</style><path class="cs1n8lbgm"/><path class="hwftn4b8i"/><path class="fttck0yws"/>`,
		"fallback": "arcticons:telmex",
	});
}

export default Component;
