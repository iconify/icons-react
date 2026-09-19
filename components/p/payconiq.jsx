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
		"content": `<style>.ogdeawb8h {
  d: path("M16.616 24.003a4.3 4.3 0 1 1 0-.005zm14.809 0a4.278 4.278 0 1 0 0-.005z");
}

.uedcwccci {
  d: path("m21.629 22.512l8.614-6.274s2.05-1.704 5.43-1.704c5.133 0 9.327 4.085 9.327 9.326c0 5.635-4.278 9.522-9.126 9.522c-8.313 0-9.419-7.912-9.419-7.912l-9.206 6.616s-1.879 1.392-4.791 1.392C7.378 33.478 3 29.448 3 24.02c0-4.989 3.849-9.498 9.498-9.498c7.806 0 9.131 7.99 9.131 7.99");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ogdeawb8h"/><path class="uedcwccci"/></g>`,
		"fallback": "arcticons:payconiq",
	});
}

export default Component;
