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
		"content": `<style>.dwzuvhbyd {
  cx: 17.587px;
  cy: 15.737px;
  r: 3.083px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.focmvvk3g {
  cx: 30.537px;
  cy: 15.737px;
  r: 3.083px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oofx2q4dc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.8 30.167c0 7.4-7.4 12.333-12.333 12.333H9.2V20.3c0-7.4 7.4-14.8 14.8-14.8s14.8 7.4 14.8 14.8zm-27.75-9.744c0-1.726.37-3.33.987-4.933c3.083-7.4 10.483-5.55 10.483 0v6.167h3.083V15.49c0-6.167 7.4-7.4 10.484 0c.616 1.603.986 3.207.986 4.933c0 6.833-4.686 12.58-12.703 12.58a12.586 12.586 0 0 1-13.32-12.58");
}
</style><path class="oofx2q4dc"/><circle class="dwzuvhbyd"/><circle class="focmvvk3g"/>`,
		"fallback": "arcticons:meeting-owl",
	});
}

export default Component;
