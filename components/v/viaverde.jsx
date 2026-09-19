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
		"content": `<style>.aqratts-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.345 40.567c3.86-.357 5.574-5.288 5.574-5.288s8.885-22.691 9.576-24.51c.513-1.353 1.857-3.216 4.716-3.359s8.29.072 8.29.072s-4.717.429-6.647 6.074l-8.646 22.652s-1.43 4.145-4.93 4.43z");
}

.d-uc5ijdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.04 37.082l-7.794-20.01S9.985 13.38 5.5 12.866l14.062-.094c2.454 0 8.681 1.199 6.96 5.604");
}
</style><path class="d-uc5ijdo"/><path class="aqratts-w"/>`,
		"fallback": "arcticons:viaverde",
	});
}

export default Component;
