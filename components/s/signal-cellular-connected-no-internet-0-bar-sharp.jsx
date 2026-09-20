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
		"content": `<style>.bszd1dm9o {
  fill: currentColor;
  d: path("M3 21L21 3v4.23h-1V5.422L5.421 20H17.5v1zm17-3.23V9.615h1v8.153zm1.23 2v1.46h-1.46v-1.46z");
}
</style><path class="bszd1dm9o"/>`,
		"fallback": "material-symbols-light:signal-cellular-connected-no-internet-0-bar-sharp",
	});
}

export default Component;
