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
		"content": `<style>.u56uzy3bp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.645 32.775c1.48 1.698 3.256 2.548 5.92 2.548h1.999c3.256 0 5.92-2.548 5.92-5.662S18.82 24 15.564 24h-5.177C7.131 24 4.5 21.452 4.5 18.339s2.632-5.662 5.888-5.662h4.805c2.665 0 4.44.566 5.92 2.548M35.323 24c3.113 0 5.66 2.548 5.66 5.661s-2.547 5.662-5.66 5.662h-8.807V12.677H37.84c3.113 0 5.661 2.548 5.661 5.662S40.952 24 37.839 24H26.516");
}
</style><path class="u56uzy3bp"/>`,
		"fallback": "arcticons:student-beans",
	});
}

export default Component;
