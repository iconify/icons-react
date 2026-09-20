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
		"content": `<style>.a9ebj6ict {
  fill: currentColor;
  d: path("M11.175 18.825Q10 17.65 10 16t1.175-2.825T14 12q.575 0 1.063.138t.937.412V4h6v3h-4v9q0 1.65-1.175 2.825T14 20t-2.825-1.175M2 16q0-2.475.95-4.663t2.575-3.812T9.338 4.95T14 4v2q-2.05 0-3.875.788t-3.187 2.15t-2.15 3.174T4 16zm4 0q0-1.65.638-3.113t1.725-2.55T10.9 8.625T14 8v2q-2.5 0-4.25 1.75T8 16z");
}
</style><path class="a9ebj6ict"/>`,
		"fallback": "material-symbols:music-cast-outline",
	});
}

export default Component;
