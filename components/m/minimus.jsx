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
		"content": `<style>.o17d2hbgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.25 10.147a4.5 4.5 0 0 1 2.25 3.896v19.914a4.5 4.5 0 0 1-6.75 3.897l-17.246-9.957a4.5 4.5 0 0 1 0-7.793l17.246-9.957a4.5 4.5 0 0 1 4.5 0");
}

.x22oztboi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 17.508l-12.75-7.361a4.5 4.5 0 0 0-6.75 3.896v19.914a4.5 4.5 0 0 0 6.75 3.896L24 30.493");
}
</style><path class="x22oztboi"/><path class="o17d2hbgv"/>`,
		"fallback": "arcticons:minimus",
	});
}

export default Component;
