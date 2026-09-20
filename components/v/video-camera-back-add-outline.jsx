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
		"content": `<style>.o300jsz8m {
  fill: currentColor;
  d: path("M5.096 19q-.69 0-1.153-.462t-.462-1.15v-5.004h1v5q0 .27.173.443t.442.173h10.77q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442Q16.134 6 15.865 6h-5V5h5.003q.688 0 1.15.463t.463 1.153v4.653l3.038-3.038v7.538l-3.038-3.038v4.654q0 .69-.463 1.153T15.866 19zm1.039-3.27h8.692l-2.74-3.653l-2.53 3.192l-1.605-1.925zM5.48 10V8h-2V7h2V5h1v2h2v1h-2v2z");
}
</style><path class="o300jsz8m"/>`,
		"fallback": "material-symbols-light:video-camera-back-add-outline",
	});
}

export default Component;
