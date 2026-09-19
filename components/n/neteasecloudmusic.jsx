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
		"content": `<style>.c9zng2b-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.623 8.522c-3.557-7.517-12.102-3.779-9.383 5.284c1.347 4.49 6.057 8.04 5.986 12.727c-.062 4.104-4.063 6.993-8.035 6.74c-4.025-.254-6.542-1.96-7.28-6.093c-.596-3.337 2.592-6.871 5.554-8.52c6.268-3.488 16.126-.2 16.933 11.756c.652 9.674-11.21 16.153-22.487 11.594c-15.54-6.282-11.123-24.716-2.588-27.287");
}
</style><path class="c9zng2b-d"/>`,
		"fallback": "arcticons:neteasecloudmusic",
	});
}

export default Component;
