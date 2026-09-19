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
		"content": `<style>.aalmd3z_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.745 8.928l14.623 14.545a.443.443 0 0 1 .004.627l-.004.005l-14.623 14.69a.443.443 0 0 1-.62 0L13.5 24.249a.443.443 0 0 1-.004-.627l.004-.005L28.124 8.928a.443.443 0 0 1 .62 0");
}

.gz1g67rbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.876 9.205l14.623 14.546a.443.443 0 0 1 .004.627l-.004.004l-14.623 14.69a.443.443 0 0 1-.62 0L4.631 24.527a.443.443 0 0 1-.004-.628l.004-.004l14.623-14.69a.443.443 0 0 1 .62 0");
}

.w0fxgrxrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.88 17.764l-5.543 6.097l6.098 6.098");
}
</style><path class="gz1g67rbu"/><path class="aalmd3z_r"/><path class="w0fxgrxrz"/>`,
		"fallback": "arcticons:letsview",
	});
}

export default Component;
