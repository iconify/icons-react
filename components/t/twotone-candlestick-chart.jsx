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
		"content": `<style>.nc_zssbwv {
  fill: currentColor;
  d: path("M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2z");
}

.vzdjj-55s {
  fill: currentColor;
  d: path("M7 8h2v8H7zm8 2h2v3h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ytbx0g2gn {
  fill: currentColor;
  d: path("M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z");
}
</style><path class="nc_zssbwv"/><path class="vzdjj-55s"/><path class="ytbx0g2gn"/>`,
		"fallback": "ic:twotone-candlestick-chart",
	});
}

export default Component;
