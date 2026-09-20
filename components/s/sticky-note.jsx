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
		"content": `<style>.c8aomccym {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v9.961L15.577 20zm5.884-4.5h1v-6h3v-1h-7v1h3zM15 19l4-4h-2q-.825 0-1.412.588T15 17z");
}
</style><path class="c8aomccym"/>`,
		"fallback": "material-symbols-light:sticky-note",
	});
}

export default Component;
