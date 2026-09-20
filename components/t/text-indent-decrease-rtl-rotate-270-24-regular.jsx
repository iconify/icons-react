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
		"content": `<style>.bpn30fo3s {
  fill: currentColor;
  d: path("M16.75 18.5a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75m-5 3a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-.75.75m-5-3a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75M9.147 4.804a.75.75 0 0 0 1.133.976l1.47-1.47l1.47 1.47l.084.073a.75.75 0 0 0 .976-1.133l-2-2l-.084-.073a.75.75 0 0 0-.976.073l-2 2z");
}
</style><path class="bpn30fo3s"/>`,
		"fallback": "fluent:text-indent-decrease-rtl-rotate-270-24-regular",
	});
}

export default Component;
