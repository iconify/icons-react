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
		"content": `<style>.df_1nqm2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.7 15.34c.51 6.07-4.21 11.3-10.15 11.6L38.76 42.5h-8.19L19.39 26.98c-.03-.08-.05-.16-.08-.25v-5.29c0-.23.19-.42.42-.42h6.45c1.02 0 2.04-.26 2.88-.85c1.34-.96 2.08-2.44 2.05-4.03c-.05-2.58-2.27-4.69-4.95-4.69H9.24V5.5h17.45c1.6 0 3.15.34 4.55.95");
}

.gav36cbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.242 8.857a2 2 0 0 1 0 4h-3.3v-8h3.3a2 2 0 0 1 0 4m0 0h-3.3");
}

.gtux8y-da {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.237 14.631h6.892V42.5H9.237z");
}

.x-etxdbur {
  cx: 37.274px;
  cy: 8.857px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="gtux8y-da"/><path class="df_1nqm2c"/><circle class="x-etxdbur"/><path class="gav36cbth"/>`,
		"fallback": "arcticons:revolut-business",
	});
}

export default Component;
