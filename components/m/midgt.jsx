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
		"content": `<style>.kgcqvdbuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.315 5.5l-2.452 7.597s-.28 1.155-1.768 1.155H8.823L7.41 19.019h23.533s5.073.19 7.22-5.078s3.218-8.255 3.218-8.255zm-4.63 37l2.452-7.597s.28-1.155 1.768-1.155h13.272l1.412-4.767H17.056s-5.073-.19-7.22 5.078c-2.149 5.268-3.218 8.255-3.218 8.255zM6.907 24H41.33");
}
</style><path class="kgcqvdbuc"/>`,
		"fallback": "arcticons:midgt",
	});
}

export default Component;
