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
		"content": `<style>.owy4csmzi {
  fill: currentColor;
  d: path("M9.98 15.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM5.097 19q-.69 0-1.153-.462t-.462-1.153V6.615q0-.69.462-1.152T5.096 5h10.77q.69 0 1.152.463t.463 1.153v4.653l3.038-3.038v7.538l-3.038-3.038v4.654q0 .69-.463 1.153T15.866 19zm0-1h10.77q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442T15.866 6H5.096q-.269 0-.442.173t-.173.443v10.769q0 .269.173.442t.442.173m-.615 0V6z");
}
</style><path class="owy4csmzi"/>`,
		"fallback": "material-symbols-light:video-call-outline",
	});
}

export default Component;
