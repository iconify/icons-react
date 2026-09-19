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
		"content": `<style>.hmm-jpbyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 42.138h39M24 36.994V5.862m-9.533 8.345h19.066M20.98 40.438L4.953 39.65l.615-4.542Zm-2.565-2.99l-9.86-5.599m18.465 8.589l16.028-.788l-.615-4.542Zm2.565-2.99l9.86-5.599");
}
</style><path class="hmm-jpbyb"/>`,
		"fallback": "arcticons:quick-bible",
	});
}

export default Component;
