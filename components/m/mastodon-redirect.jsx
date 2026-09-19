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
		"content": `<style>.ps20rqrjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.865 19.041L36.32 6.586l6.18 6.18l-14.452 14.466");
}

.puz8m2bpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.048 26.787v14.627h-8.042V29.809a5.52 5.52 0 0 0-1.255-3.495l-7.03-8.528l-6.221 6.22V6.614h17.394L17.806 11.7l6.06 7.341l.512.62l1.97 2.39a7.5 7.5 0 0 1 1.7 4.736");
}
</style><path class="puz8m2bpe"/><path class="ps20rqrjc"/>`,
		"fallback": "arcticons:mastodon-redirect",
	});
}

export default Component;
