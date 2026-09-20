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
		"content": `<style>.m2s663b8a {
  fill: currentColor;
  d: path("M12 21.577L9.423 19H4V3h16v16h-5.423zm2.129-10.371Q15 10.335 15 9.077t-.871-2.129T12 6.077t-2.129.871T9 9.077t.871 2.129t2.129.871t2.129-.871M5 18h14v-.766q-1.35-1.325-3.137-2.087T12 14.385t-3.863.762T5 17.235z");
}
</style><path class="m2s663b8a"/>`,
		"fallback": "material-symbols-light:person-pin-sharp",
	});
}

export default Component;
