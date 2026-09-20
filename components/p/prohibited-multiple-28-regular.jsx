import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k-zlapbeb {
  fill: currentColor;
  d: path("M6.282 6.282c3.532-3.531 9.152-3.701 12.885-.51L5.773 19.168c-3.192-3.733-3.022-9.353.51-12.885m.551 13.945L20.227 6.833c3.192 3.733 3.022 9.353-.51 12.885s-9.151 3.7-12.884.51M20.778 5.222C16.482.926 9.518.926 5.222 5.222s-4.296 11.26 0 15.556s11.26 4.296 15.556 0s4.296-11.26 0-15.556M25 13c0 6.628-5.373 12-12 12c-1.12 0-2.204-.153-3.232-.44a10.95 10.95 0 0 0 4.982 1.19c6.075 0 11-4.925 11-11c0-1.793-.43-3.486-1.19-4.982A12 12 0 0 1 25 13");
}
</style><path class="k-zlapbeb"/>`,
		"fallback": "fluent:prohibited-multiple-28-regular",
	});
}

export default Component;
