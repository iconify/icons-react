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
		"content": `<style>.wi4b7pb4v {
  fill: currentColor;
  d: path("m9.2 16l2.8-2.1l2.75 2.1l-1.05-3.4l2.8-2.2h-3.4L12 7l-1.1 3.4H7.5l2.75 2.2zM2 20v-6q.825 0 1.413-.587T4 12t-.587-1.412T2 10V4h20v6q-.825 0-1.412.588T20 12t.588 1.413T22 14v6zm2-2h16v-2.55q-.925-.55-1.463-1.462T18 12t.538-1.987T20 8.55V6H4v2.55q.925.55 1.463 1.463T6 12t-.537 1.988T4 15.45zm8-6");
}
</style><path class="wi4b7pb4v"/>`,
		"fallback": "material-symbols:local-activity-outline-sharp",
	});
}

export default Component;
