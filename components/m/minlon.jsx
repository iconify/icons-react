import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z_93wxb7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.56 20.542c-.974-1.262-2.29-2.277-4.35-2.252a5.711 5.711 0 0 0 0 11.42c2.56-.128 4.188-1.12 5.918-3.421l2.752-3.783c2.182-2.788 3.426-4.065 6.414-4.216a5.71 5.71 0 0 1 0 11.42c-1.915-.02-3.102-.772-4.406-2.077m19.204 2.077h-5.946V18.358h5.946h-.268a5.676 5.676 0 0 1 0 11.352z");
}
</style><path class="z_93wxb7h"/>`,
		"fallback": "arcticons:minlon",
	});
}

export default Component;
