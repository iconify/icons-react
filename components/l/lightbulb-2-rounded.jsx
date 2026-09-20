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
		"content": `<style>.a2-byfpuf {
  fill: currentColor;
  d: path("M10 18q-.825 0-1.412-.587T8 16v-1.25q-1.425-.975-2.212-2.5T5 9q0-2.925 2.038-4.962T12 2t4.963 2.038T19 9q0 1.725-.788 3.238T16 14.75V16q0 .825-.587 1.413T14 18zm0 4q-.425 0-.712-.288T9 21t.288-.712T10 20h4q.425 0 .713.288T15 21t-.288.713T14 22z");
}
</style><path class="a2-byfpuf"/>`,
		"fallback": "material-symbols:lightbulb-2-rounded",
	});
}

export default Component;
