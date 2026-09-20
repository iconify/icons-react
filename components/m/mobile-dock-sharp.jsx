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
		"content": `<style>.vt3rrtvfy {
  fill: currentColor;
  d: path("M8 23v-2h8v2zm4.713-17.287Q13 5.424 13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6t.713-.288M6 19V1h12v4.05h1v3.9h-1V19z");
}
</style><path class="vt3rrtvfy"/>`,
		"fallback": "material-symbols:mobile-dock-sharp",
	});
}

export default Component;
