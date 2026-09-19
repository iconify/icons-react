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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jhjiipb7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.504 33.075V16.607h7.217c3.048 0 5.519 2.476 5.519 5.53s-2.47 5.531-5.519 5.531H9.504m7.217 0l5.391 5.403m3.534-16.464v16.468m12.858-16.468v16.468M25.646 24.81h12.858");
}
</style><circle class="cpk0fnbgt"/><path class="jhjiipb7u"/>`,
		"fallback": "arcticons:radisson-hotels",
	});
}

export default Component;
