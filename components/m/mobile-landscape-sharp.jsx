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
		"content": `<style>.gdp26t1fb {
  fill: currentColor;
  d: path("M1 19V5h5.1V4h4.8v1H23v14zm4.713-6.288Q6 12.425 6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13t.713-.288");
}
</style><path class="gdp26t1fb"/>`,
		"fallback": "material-symbols:mobile-landscape-sharp",
	});
}

export default Component;
