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
		"content": `<style>.m4djlzbhc {
  fill: currentColor;
  d: path("M5 20.98V3.02h14v17.96zm1.77-9.615h3.73v-.769h3v.77h3.73V4.712H6.77zm0 1v6.924h10.46v-6.924zM6 4.02v15.962h12V4.019z");
}
</style><path class="m4djlzbhc"/>`,
		"fallback": "material-symbols-light:sensor-window-sharp",
	});
}

export default Component;
