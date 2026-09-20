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
		"content": `<style>.clfi13brj {
  fill: currentColor;
  d: path("M3 21v-1.77q0-.665.475-1.14t1.14-.475h14.77q.666 0 1.14.475T21 19.23V21zm2.827-5.27V4.617q0-.691.463-1.153T7.442 3h9.116q.69 0 1.153.463t.462 1.153V15.73zm2.385-2.288h.555q.87 0 1.359-.879q.49-.879.49-2.448t-.49-2.457t-1.359-.889h-.555zm5.672-1.884q.595 0 1.019-.424q.424-.423.424-1.018t-.424-1.019t-1.018-.424t-1.019.423t-.424 1.019t.424 1.019t1.018.424");
}
</style><path class="clfi13brj"/>`,
		"fallback": "material-symbols-light:smart-card-reader",
	});
}

export default Component;
