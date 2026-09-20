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
		"content": `<style>.rs7odfzbn {
  fill: currentColor;
  d: path("M6 21v-4H2V8h20v3.75q-.675-.35-1.412-.55t-1.513-.2q-1.95 0-3.537 1.1T13.25 15H8v4h5.1q.175.55.425 1.05t.6.95zM6 7V3h12v4zm12 14v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="rs7odfzbn"/>`,
		"fallback": "material-symbols:print-add-sharp",
	});
}

export default Component;
