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
		"content": `<style>.fgl3rp8un {
  fill: currentColor;
  d: path("M2 14q-.825 0-1.412-.587T0 12V6q0-.3.125-.575T.45 4.95L3.6 1.8q.225-.225.5-.338t.55-.112q.65 0 1.125.5t.35 1.275L5.8 5H11q.425 0 .713.288T12 6v1.25q0 .15-.025.288T11.9 7.8l-2.25 5.3q-.175.425-.562.663T8.25 14zm11 5q-.425 0-.712-.288T12 18v-1.25q0-.15.025-.288t.075-.262l2.25-5.3q.2-.425.575-.663T15.75 10H22q.825 0 1.413.587T24 12v6q0 .3-.112.563t-.338.487L20.4 22.2q-.225.225-.5.338t-.55.112q-.65 0-1.125-.5t-.35-1.275L18.2 19z");
}
</style><path class="fgl3rp8un"/>`,
		"fallback": "material-symbols:thumbs-up-down-rounded",
	});
}

export default Component;
