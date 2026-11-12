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
		"content": `<style>.bem6xnbwz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.dmm_ovqpx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.184 6.692a.75.75 0 0 0-1.368 0l-4.5 10a.75.75 0 0 0 1.368.616l1.438-3.194h4.757l1.437 3.194a.75.75 0 0 0 1.368-.616zM16.5 8.828l-1.703 3.786h3.407z");
}

.yx9j9-c-k {
  fill: currentColor;
  d: path("M2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path clip-rule="evenodd" class="dmm_ovqpx"/><path clip-rule="evenodd" class="bem6xnbwz"/><path class="yx9j9-c-k"/>`,
		"fallback": "solar:sort-by-alphabet-bold-duotone",
	});
}

export default Component;
