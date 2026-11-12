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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.icua87rxf {
  d: path("M12.581 6.044c.242.172.471.362.697.556q.79.676 1.476 1.458C15.986 9.466 17 11.222 17 13.143a5 5 0 0 1-10 0c0-1.004.284-1.983.731-2.876c.704-1.409 1.802-2.648 2.993-3.669a10 10 0 0 1 .695-.555a1 1 0 0 1 1.162 0ZM12 8.139c-1.384 1.192-2.999 3.085-3 5.004a3 3 0 0 0 .879 2.121A2.997 2.997 0 0 0 15 13.143c-.001-1.92-1.616-3.812-3-5.004M5 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm16 0a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Z");
}

.wm_q-e2nk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m5 4.857s-4 2.857-4 6.286a4 4 0 0 0 8 0c0-3.429-4-6.286-4-6.286");
}
</style><g class="cuyn6tgcc"><path class="wm_q-e2nk"/><path class="icua87rxf"/></g>`,
		"fallback": "coolicons:meter-water-bulk",
	});
}

export default Component;
