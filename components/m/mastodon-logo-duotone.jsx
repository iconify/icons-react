import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.f7_ko25_c {
  d: path("M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m24 112a24 24 0 0 1-24 24H48V72a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Zm-24-40v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104");
}

.ig9l1obma {
  d: path("M216 72v72a32 32 0 0 1-32 32H40V72a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ig9l1obma"/><path class="f7_ko25_c"/></g>`,
		"fallback": "ph:mastodon-logo-duotone",
	});
}

export default Component;
