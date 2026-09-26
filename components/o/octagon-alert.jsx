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
		"content": `<style>.e0u3qtbzv {
  d: path("M12 8V12");
}

.n1f7v1byd {
  d: path("M3 14.5645V9.43553C3 8.77249 3.26339 8.13661 3.73223 7.66777L7.66777 3.73223C8.13661 3.26339 8.77249 3 9.43553 3H14.5645C15.2275 3 15.8634 3.26339 16.3322 3.73223L20.2678 7.66777C20.7366 8.13661 21 8.77249 21 9.43553V14.5645C21 15.2275 20.7366 15.8634 20.2678 16.3322L16.3322 20.2678C15.8634 20.7366 15.2275 21 14.5645 21H9.43553C8.77249 21 8.13661 20.7366 7.66777 20.2678L3.73223 16.3322C3.26339 15.8634 3 15.2275 3 14.5645Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zs843lqwx {
  fill: currentColor;
  d: path("M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="n1f7v1byd"/><path class="e0u3qtbzv"/><path class="zs843lqwx"/></g>`,
		"fallback": "keyline-icons:octagon-alert",
	});
}

export default Component;
