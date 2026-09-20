import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w5cm8kbql {
  fill: currentColor;
  d: path("M8.494 20.299q-1.642-.701-2.858-1.916q-1.215-1.216-1.926-2.848Q3 13.902 3 12.039q0-.902.167-1.776t.497-1.715l.78.78q-.219.65-.331 1.317T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12t-2.325-5.675T12 4q-.675 0-1.332.112t-1.3.332l-.776-.775q.789-.315 1.606-.492T11.885 3q1.882 0 3.544.701t2.896 1.926t1.955 2.867T21 12t-.71 3.506q-.711 1.642-1.926 2.857q-1.216 1.216-2.858 1.926Q13.864 21 12 21t-3.506-.701M5.303 6.543q-.264-.264-.264-.62t.264-.62t.62-.264t.62.264t.265.62t-.265.62t-.62.265t-.62-.265M12 12");
}
</style><path class="w5cm8kbql"/>`,
		"fallback": "material-symbols-light:motion-photos-on-outline-sharp",
	});
}

export default Component;
