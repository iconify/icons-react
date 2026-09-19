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
		"content": `<style>.r81qvjtya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 6.629l19 34.743H5z");
}

.we91-1b2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 12.415l14.299 26.242H9.7z");
}

.wrz6btrdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 18.213l9.652 17.545H14.348z");
}
</style><path class="wrz6btrdz"/><path class="we91-1b2s"/><path class="r81qvjtya"/>`,
		"fallback": "arcticons:naver-prism",
	});
}

export default Component;
