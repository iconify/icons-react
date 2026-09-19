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
		"content": `<style>.o-6xin7wg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 16.544v14.912H29.735L24 18.838l-5.735 12.618H4.5V16.544h6.882v12.618l5.736-12.618h13.764l5.736 12.618V16.544z");
}
</style><path class="o-6xin7wg"/>`,
		"fallback": "arcticons:kakao-webtoon",
	});
}

export default Component;
