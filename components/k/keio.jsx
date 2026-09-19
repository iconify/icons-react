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
		"content": `<style>.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.kqj43ibxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.486 20.426l-2.741 7.148m8.29-7.148l-4.197 2.802l1.501 4.346m10.638-7.148h-4.812l-2.714 7.148h4.811m1.062-3.654h-4.486m9.263-3.494l-2.727 7.148m8.226-7.148c1.331 0 1.994 1.056 1.486 2.368l-.934 2.412c-.508 1.312-1.988 2.368-3.32 2.368s-1.994-1.056-1.486-2.368l.934-2.412c.508-1.312 1.989-2.368 3.32-2.368");
}
</style><rect class="jc1oydeao"/><path class="kqj43ibxe"/>`,
		"fallback": "arcticons:keio",
	});
}

export default Component;
