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
		"content": `<style>.emhel1blc {
  fill: currentColor;
  d: path("M4 21V3h14v8.735q-.22-.031-.5-.031t-.5.03V4h-5.5v6.192L9.5 9l-2 1.192V4H5v16h6.992q.073.27.201.528q.128.259.288.472zm10.665-.472Q13.5 19.364 13.5 17.692q0-1.67 1.165-2.835q1.164-1.165 2.835-1.165t2.836 1.165t1.164 2.835t-1.164 2.836t-2.836 1.164t-2.835-1.164m1.97-.951l2.73-1.923l-2.73-1.923zM7.5 4h4zM5 4h12h-5.5h.492z");
}
</style><path class="emhel1blc"/>`,
		"fallback": "material-symbols-light:play-lesson-outline-sharp",
	});
}

export default Component;
