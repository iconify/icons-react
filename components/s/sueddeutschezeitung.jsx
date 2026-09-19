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
		"content": `<style>.dda5k-bsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2");
}

.i_am5_bgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.406 16.43h10.52l-10.52 15.88h10.52M12.24 30.57c.974 1.267 2.195 1.74 3.894 1.74h2.35a3.96 3.96 0 0 0 3.962-3.962v-.017a3.96 3.96 0 0 0-3.961-3.961h-2.593a3.965 3.965 0 0 1-3.966-3.966A3.974 3.974 0 0 1 15.9 16.43h2.338c1.699 0 2.92.472 3.894 1.74");
}
</style><path class="i_am5_bgj"/><path class="dda5k-bsr"/>`,
		"fallback": "arcticons:sueddeutschezeitung",
	});
}

export default Component;
