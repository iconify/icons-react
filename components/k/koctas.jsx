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
		"content": `<style>.wjqwzhbrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 38.826h-29V18.553L24 7.575l14.5 10.978zM24 19.769L9.5 30.747m9.988-7.561v15.64m0-9.331H38.5m-9.988 0V10.991m0 12.195l-12.566-9.514");
}
</style><path class="wjqwzhbrg"/>`,
		"fallback": "arcticons:koctas",
	});
}

export default Component;
