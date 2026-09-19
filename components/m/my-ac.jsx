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
		"content": `<style>.b2bp6acxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.887 22a2 2 0 1 1 4 0v3.3m-4-5.3v5.3m4-3.3a2 2 0 1 1 4 0v3.3m18.226-1.007c-.345.602-.993 1.007-1.917 1.007s-1.82-.895-1.82-2V22c0-1.104.896-2 1.819-2s1.57.404 1.916 1.004M23.014 25.3l-2.13-5.3m4 0l-2.54 7.2a1.2 1.2 0 0 1-1.131.8h-.329m10.492-4.7c0 1.105-.889 2-1.985 2h-.696c-.727 0-1.315-.593-1.315-1.325s.588-1.325 1.315-1.325h2.685");
}

.h-fc2g9vm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.876 20.525c.482-.483.82-.525 1.75-.525c1.056 0 1.75.465 1.75 1.72v3.58");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="b2bp6acxk"/><path class="h-fc2g9vm"/>`,
		"fallback": "arcticons:my-ac",
	});
}

export default Component;
