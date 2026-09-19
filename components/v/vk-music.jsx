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
		"content": `<style>.ij5d1ac5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.493 18.937c-1.622-1.277-3.206-2.607-4.983-3.672c-1.792-1.073-3.678-1.9-5.752-2.27c-2.244-.403-4.36-.017-6.384.97c-1.655.806-3.16 1.855-4.668 2.9c-2.713 1.882-5.489 3.646-8.681 4.632c-2.025.625-4.1.908-6.211.966c-.102.003-.205.012-.307.018");
}

.ts3-80b7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M12.175 29.67v-4.032m5.913 4.032v-4.032M24 32.021v-8.734m5.912-4.308V36.33m5.913-13.043v8.734");
}
</style><path class="ij5d1ac5m"/><path class="ts3-80b7e"/>`,
		"fallback": "arcticons:vk-music",
	});
}

export default Component;
