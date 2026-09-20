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
		"content": `<style>.kwx7uybhx {
  fill: currentColor;
  d: path("M12 16.73q1.567 0 2.649-1.081T15.731 13t-1.082-2.649T12 9.269t-2.649 1.082T8.269 13t1.082 2.649T12 16.731m0-1q-1.165 0-1.948-.783T9.269 13t.783-1.948T12 10.269t1.948.783t.783 1.948t-.783 1.948t-1.948.783M3 20V6h4.573l1.85-2h5.154l1.85 2H21v14zm9-1h8V7h-4.011l-1.845-2H12z");
}
</style><path class="kwx7uybhx"/>`,
		"fallback": "material-symbols-light:monochrome-photos-outline-sharp",
	});
}

export default Component;
