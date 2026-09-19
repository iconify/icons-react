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
		"content": `<style>.ecp31taxa {
  fill: currentColor;
  d: path("M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m3.21 13l-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.o3rgvw8mr {
  fill: currentColor;
  d: path("M11.01 6L6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6zm-.66 6.59l1.6-4.55h.09l1.6 4.55z");
}

.pq665ab2t {
  fill: currentColor;
  d: path("M12.04 8.04h-.09l-1.6 4.55h3.29z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zsfw75g9a {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8");
}
</style><path class="pq665ab2t"/><path class="ecp31taxa"/><path class="zsfw75g9a"/><path class="o3rgvw8mr"/>`,
		"fallback": "ic:twotone-hdr-auto",
	});
}

export default Component;
