import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n1mjunbsu {
  fill: var(--svg-color--fff, #fff);
}

.r8mg7qbiq {
  cx: 16px;
  cy: 26.4px;
  r: 4.2px;
}

.sv82cib9p {
  cx: 48px;
  cy: 26.4px;
  r: 4.2px;
}

.vbmapebvm {
  cx: 32px;
  cy: 26.4px;
  r: 4.2px;
}

.z1f2acbso {
  fill: var(--svg-color--4fd1d9, #4fd1d9);
  d: path("M8.6 5h46.9c3.6 0 6.6 2.9 6.6 6.5v29.8c0 3.6-2.9 6.5-6.6 6.5h-6.9V59L38.1 47.8H8.6C5 47.8 2 44.9 2 41.3V11.5C2 7.9 4.9 5 8.6 5");
}
</style><path class="z1f2acbso"/><g class="n1mjunbsu"><circle class="sv82cib9p"/><circle class="vbmapebvm"/><circle class="r8mg7qbiq"/></g>`,
		"fallback": "emojione:left-speech-bubble",
	});
}

export default Component;
