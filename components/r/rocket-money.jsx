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
		"content": `<style>.on_381buy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.158 44.087c10.147-6.209 13.379-19.53 7.216-29.754S22.99.853 12.843 7.063C2.695 13.27-.537 26.591 5.625 36.815a21.6 21.6 0 0 0 7.217 7.27l5.765-7.115c-6.203-3.047-8.817-10.66-5.84-17.005c2.979-6.345 10.422-9.02 16.625-5.973s8.818 10.66 5.84 17.005a12.6 12.6 0 0 1-5.74 5.923z");
}
</style><path class="on_381buy"/>`,
		"fallback": "arcticons:rocket-money",
	});
}

export default Component;
