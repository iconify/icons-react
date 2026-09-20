import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w8incwb2m {
  fill: currentColor;
  d: path("M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.6a5.5 5.5 0 0 1-.578-3H4.5a.5.5 0 0 1 0-1h.707q.149-.524.393-1H4.5a.5.5 0 0 1 0-1h1.757a5.5 5.5 0 0 1 1.08-1H4.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .489.605A5.5 5.5 0 0 1 10.5 5c1.86 0 3.505.923 4.5 2.337V5a2 2 0 0 0-2-2zm7.5 11a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0 1a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}
</style><path class="w8incwb2m"/>`,
		"fallback": "fluent:slide-record-16-filled",
	});
}

export default Component;
