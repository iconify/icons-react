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
		"content": `<style>.q10hsmivv {
  fill: currentColor;
  d: path("M4 18q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h16q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18zm0-2h16V8h-3v3q0 .425-.288.713T16 12t-.712-.288T15 11V8h-2v3q0 .425-.288.713T12 12t-.712-.288T11 11V8H9v3q0 .425-.288.713T8 12t-.712-.288T7 11V8H4zm8-4");
}
</style><path class="q10hsmivv"/>`,
		"fallback": "material-symbols:straighten-outline-rounded",
	});
}

export default Component;
