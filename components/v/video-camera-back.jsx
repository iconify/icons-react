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
		"content": `<style>.f6xgi0bmv {
  fill: currentColor;
  d: path("M6.135 15.73h8.692l-2.758-3.653l-2.454 3.077l-1.588-1.885zM5.096 19q-.69 0-1.153-.462t-.462-1.153V6.615q0-.69.462-1.152T5.096 5h10.77q.69 0 1.152.463t.463 1.153v4.653l3.038-3.038v7.538l-3.038-3.038v4.654q0 .69-.463 1.153T15.866 19z");
}
</style><path class="f6xgi0bmv"/>`,
		"fallback": "material-symbols-light:video-camera-back",
	});
}

export default Component;
