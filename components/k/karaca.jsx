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
		"content": `<style>.ewfcxlrop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M14.552 26.034H29.74m-15.24 7.65l.07-10.999m5.018 10.999v-7.65m5.102 7.65v-7.65m5.049 7.65V14.316");
}

.o0xis3x-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.5 18.843l-11.547-.003a2.37 2.37 0 0 1-2.37-2.371v-2.094m5.107-.029v4.495");
}
</style><path class="ewfcxlrop"/><path class="o0xis3x-c"/>`,
		"fallback": "arcticons:karaca",
	});
}

export default Component;
