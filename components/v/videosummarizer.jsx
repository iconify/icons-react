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
		"content": `<style>.cshlkstwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.34 14.997v11.51l9.966-5.755z");
}

.y-90c08bv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.02 8.045l15.764-.076c6.546-.032 11.536 5.853 11.71 12.954c.278 11.424-7.968 16.485-14.287 19.108v-8.13H16.02c-6.79 0-11.52-4.634-11.52-10.978c0-7.722 3.898-12.841 11.52-12.878");
}
</style><path class="y-90c08bv"/><path class="cshlkstwb"/>`,
		"fallback": "arcticons:videosummarizer",
	});
}

export default Component;
