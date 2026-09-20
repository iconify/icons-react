import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v-woklbgx {
  fill: currentColor;
  d: path("M41 21a16.93 16.93 0 0 1-4.02 10.98h-.001l-.017.02H37L26.912 42.71a4 4 0 0 1-5.824 0L11 32h.038l-.017-.02l-.021-.025A17 17 0 0 1 9.274 29.5A16.9 16.9 0 0 1 7 21c0-9.389 7.611-17 17-17s17 7.611 17 17m-8.366-5.616a1.25 1.25 0 0 0-1.768-1.768L20.75 23.732l-3.616-3.616a1.25 1.25 0 0 0-1.768 1.768l4.5 4.5a1.25 1.25 0 0 0 1.768 0z");
}
</style><path class="v-woklbgx"/>`,
		"fallback": "fluent:location-checkmark-48-filled",
	});
}

export default Component;
