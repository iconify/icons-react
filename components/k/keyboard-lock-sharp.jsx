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
		"content": `<style>.m8cff3b3g {
  fill: currentColor;
  d: path("M16 22v-5h1v-1q0-.825.588-1.412T19 14t1.413.588T21 16v1h1v5zm2-5h2v-1q0-.425-.288-.712T19 15t-.712.288T18 16zM5 13h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm-9-3h2V8H5zm3 0h2V8H8zm3 0h2V8h-2zm3 0h2V8h-2zm3 0h2V8h-2zM2 19V5h20v8q-.65-.5-1.425-.75T19 12v-1h-2v1.425q-.6.275-1.1.675t-.9.9H8v2h6.1q-.05.25-.075.488T14 17v2z");
}
</style><path class="m8cff3b3g"/>`,
		"fallback": "material-symbols:keyboard-lock-sharp",
	});
}

export default Component;
