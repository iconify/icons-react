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
		"content": `<style>.xi8woqdbk {
  fill: currentColor;
  d: path("M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-8-3v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2V2h3v1.825q-.25.5-.375 1.05T13 6q0 2.075 1.463 3.538T18 11v6h2v2zM15.875 8.125Q15 7.25 15 6t.875-2.125T18 3t2.125.875T21 6t-.875 2.125T18 9t-2.125-.875");
}
</style><path class="xi8woqdbk"/>`,
		"fallback": "material-symbols:notifications-unread-sharp",
	});
}

export default Component;
