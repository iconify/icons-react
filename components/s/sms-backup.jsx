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
		"content": `<style>.arszh6_rt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.822 32.166l-9.593 5.168l-9.592-5.168V42.5h19.185zm-5.28-3.891l5.28 3.891m-19.185 0l9.592-7.069l2.467 1.817m4.796-15.658h15.349M22.492 15.81h15.349m-15.349 4.555h9.73M39.767 5.5H20.292a2.596 2.596 0 0 0-2.596 2.596V30.12l4.065-4.065h18.006a2.596 2.596 0 0 0 2.596-2.596h0V8.096A2.596 2.596 0 0 0 39.767 5.5");
}
</style><path class="arszh6_rt"/>`,
		"fallback": "arcticons:sms-backup",
	});
}

export default Component;
