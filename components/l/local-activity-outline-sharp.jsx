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
		"content": `<style>.cc8xqg3yj {
  fill: currentColor;
  d: path("M9.93 15L12 13.4l2.02 1.562l-.782-2.516l2.147-1.661H12.83L12 8.23l-.83 2.554H8.615l2.096 1.661zM3 19v-4.192q.883-.327 1.441-1.088Q5 12.96 5 12t-.559-1.72T3 9.192V5h18v4.192q-.883.327-1.441 1.088Q19 11.04 19 12t.559 1.72T21 14.808V19zm1-1h16v-2.55q-.925-.55-1.463-1.462T18 12t.538-1.987T20 8.55V6H4v2.55q.925.55 1.463 1.463T6 12t-.537 1.988T4 15.45zm8-6");
}
</style><path class="cc8xqg3yj"/>`,
		"fallback": "material-symbols-light:local-activity-outline-sharp",
	});
}

export default Component;
