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
		"content": `<style>.v--pmjb5j {
  fill: currentColor;
  d: path("M22.17 9.17c0-3.91-3.19-7.06-7.11-7c-3.83.06-6.99 3.37-6.88 7.19a6.986 6.986 0 0 0 5.83 6.7V20H6v-3h.5c.28 0 .5-.22.5-.5V13c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3.5c0 .28.22.5.5.5H3v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-2v-3.88a7 7 0 0 0 6.17-6.95");
}

.vaumy7pmm {
  cx: 4.5px;
  cy: 9.5px;
  r: 1.5px;
  fill: currentColor;
}
</style><circle class="vaumy7pmm"/><path class="v--pmjb5j"/>`,
		"fallback": "ic:round-nature-people",
	});
}

export default Component;
