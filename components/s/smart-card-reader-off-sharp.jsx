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
		"content": `<style>.dfqbb9bcr {
  fill: currentColor;
  d: path("m21.11 21.27l-1.531-1.531H3v-3.385h13.194l-1.884-1.885H5.826V5.981L1.892 2.046L2.6 1.34l19.223 19.217zM18.173 1.738v12.25h-.161l-3.721-3.766q.459-.142.748-.51t.288-.865q0-.594-.424-1.015t-1.018-.421q-.477 0-.855.288q-.378.289-.52.729l-6.608-6.69zM8.212 12.192h.555q.577 0 .983-.435t.615-1.238L8.212 8.366z");
}
</style><path class="dfqbb9bcr"/>`,
		"fallback": "material-symbols-light:smart-card-reader-off-sharp",
	});
}

export default Component;
