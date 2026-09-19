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
		"content": `<style>.ows86csrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.366 24L11.168 6.056C9.956 4.861 7.903 5.72 7.903 7.422v33.156c0 1.703 2.053 2.561 3.265 1.366z");
}

.qgemyi7ry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.097 24L21.9 6.056c-1.213-1.195-3.266-.336-3.266 1.366v33.156c0 1.703 2.053 2.561 3.266 1.366z");
}
</style><path class="ows86csrb"/><path class="qgemyi7ry"/>`,
		"fallback": "arcticons:mygov",
	});
}

export default Component;
