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
		"content": `<style>.ar-zhsu-y {
  fill: currentColor;
  d: path("M5 21q-1.275 0-1.812-1.137t.262-2.113L9 11V5H7V3h10v2h-2v6l5.55 6.75q.8.975.263 2.113T19 21zm0-2h14l-6-7.3V5h-2v6.7zm7-7");
}
</style><path class="ar-zhsu-y"/>`,
		"fallback": "material-symbols:science-outline-sharp",
	});
}

export default Component;
