import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.lx7oxfb3q {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M11.764 9.128a4.5 4.5 0 0 1 2.6-3.196c.93-.41.727-1.784-.281-1.908c-4.612-.566-8.921 2.498-9.895 7.078c-1.035 4.87 2.067 9.656 6.93 10.69s9.642-2.078 10.677-6.947a9 9 0 0 0 .195-2.166c-.032-1.019-1.388-1.343-1.877-.449a4.5 4.5 0 0 1-4.885 2.245a4.505 4.505 0 0 1-3.464-5.347m-.23 10.708c-3.782-.804-6.195-4.528-5.39-8.318a7.02 7.02 0 0 1 4.727-5.23a6.5 6.5 0 0 0-1.063 2.424c-.747 3.516 1.493 6.973 5.005 7.72a6.5 6.5 0 0 0 4.636-.751c-1.273 3.053-4.57 4.866-7.916 4.155");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGgXxfEb7e"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="lx7oxfb3q"/></mask></defs><circle mask="url(#SVGgXxfEb7e)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:moon-circle-filled",
	});
}

export default Component;
