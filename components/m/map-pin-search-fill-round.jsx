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
		"content": `<style>.vq834g1vr {
  fill: currentColor;
  d: path("M8.963 19.876c-1.802-1.661-3.349-3.669-4.226-5.974A10.9 10.9 0 0 1 4 10a7.98 7.98 0 0 1 2.343-5.657A7.98 7.98 0 0 1 12 2a7.98 7.98 0 0 1 5.657 2.343A7.98 7.98 0 0 1 20 10c-.001 3.878-2.192 7.322-4.963 9.876a20 20 0 0 1-2.482 1.956a1 1 0 0 1-1.11 0a20 20 0 0 1-2.482-1.956m3.33-8.168l2 1.999a.999.999 0 1 0 1.414-1.414l-1.999-2a3 3 0 1 0-1.415 1.415");
}
</style><path class="vq834g1vr"/>`,
		"fallback": "coolicons:map-pin-search-fill-round",
	});
}

export default Component;
