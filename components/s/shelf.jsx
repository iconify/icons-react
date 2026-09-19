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
		"content": `<style>.mzzw232pd {
  d: path("M12.7 4.5h-2.3c-1.1 0-2 .9-2 2v35c0 1.1.9 2 2 2h2.3m0-39v39h24.9c1.1 0 2-.9 2-2v-35c0-1.1-.9-2-2-2z");
}

.vu1ix7h2f {
  d: path("M31.066 5.09v11.236l2.512-2.512m2.538-8.705v11.237l-2.512-2.512m5.805 25.528c-.83.143-1.794-.048-2.695-.96c-3.329-3.362-6.097-11.218-4.022-11.91c.66-.185 1.247.68 1.494 2.286c.436 2.824.084 7.939-.568 11.314c-.172.892-.352 1.962-1 2.935a7 7 0 0 1-.171.247m.13.183l6.87-3.966");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="mzzw232pd"/><path class="vu1ix7h2f"/></g>`,
		"fallback": "arcticons:shelf",
	});
}

export default Component;
