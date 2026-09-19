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

.ghhrlfbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.302 27c0 4 4.821 4 7.538 4h2.622C32.783 31 35 28.75 35 26s-2.82-3.68-6.038-4.5l-3.924-1C21.82 19.68 19 18.75 19 16s2.217-5 5.538-5h2.622c2.717 0 7.538 0 7.538 4M11.5 31.5v5h25");
}
</style><circle class="cpk0fnbgt"/><path class="ghhrlfbkq"/>`,
		"fallback": "arcticons:slackware",
	});
}

export default Component;
