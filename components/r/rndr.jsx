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
		"content": `<style>.fklfcua4e {
  stop-color: var(--svg-color--e92121, #e92121);
}

.ft5dv1b6b {
  fill: none;
}

.ial9f20zk {
  stop-color: var(--svg-color--9c0403, #9c0403);
}

.k6ac-hv2y {
  fill-rule: evenodd;
  d: path("M12 3.562a8.437 8.437 0 1 1-6.806 3.454a1.682 1.682 0 0 0 2.869-1.204a1.687 1.687 0 1 0-3.212.72A9 9 0 1 0 12.001 3zM6.375 6.937a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m5.625 9a3.937 3.937 0 1 0 0-7.874a3.937 3.937 0 0 0 0 7.874");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGqTUoocfR)" clip-rule="evenodd" class="k6ac-hv2y"/><defs><linearGradient id="SVGqTUoocfR" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop class="fklfcua4e"/><stop offset="1" class="ial9f20zk"/></linearGradient></defs></g>`,
		"fallback": "token-branded:rndr",
	});
}

export default Component;
