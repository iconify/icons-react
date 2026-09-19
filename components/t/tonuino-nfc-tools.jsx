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
		"content": `<style>.enfdsabgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.647 39.502h-1.874a1.84 1.84 0 0 1-1.843-1.842V6.342A1.84 1.84 0 0 1 14.773 4.5H29.51a1.84 1.84 0 0 1 1.842 1.842v2.156m-14.705 3.943H35.07m-13.783-1.886h6.044");
}

.ithob9bzu {
  cx: 30.12px;
  cy: 10.555px;
  r: 0.75px;
  fill: currentColor;
}

.obnpr0p6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.362 30.957l-8.186-4.726v9.452zm-2.112-6.83a3.73 3.73 0 0 0-4.764-.013v.013m7.038-2.585a7.33 7.33 0 0 0-9.331 0");
}

.uvgn8-bju {
  width: 18.422px;
  height: 35.002px;
  x: 16.647px;
  y: 8.498px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}
</style><rect class="uvgn8-bju"/><path class="enfdsabgg"/><circle class="ithob9bzu"/><path class="obnpr0p6m"/>`,
		"fallback": "arcticons:tonuino-nfc-tools",
	});
}

export default Component;
