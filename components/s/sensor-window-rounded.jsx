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
		"content": `<style>.mwlsf40va {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm1-11h3v-1h4v1h3V5H7zm0 2v6h10v-6zM6 4v16h12V4z");
}
</style><path class="mwlsf40va"/>`,
		"fallback": "material-symbols:sensor-window-rounded",
	});
}

export default Component;
