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
		"content": `<style>.ekwuawmox {
  fill: currentColor;
  d: path("m1 23l1.95-6.7q-.475-1.025-.712-2.1T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22q-1.125 0-2.2-.238t-2.1-.712zm10-7h2v-3h3v-2h-3V8h-2v3H8v2h3z");
}
</style><path class="ekwuawmox"/>`,
		"fallback": "material-symbols:maps-ugc",
	});
}

export default Component;
