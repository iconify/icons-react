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
		"content": `<style>.cbhb99bpq {
  d: path("M184 40v104h-40V40ZM72 144h40V40H72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.krw-n5oah {
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h24v88H80Zm32 104a8 8 0 0 0 8-8V48h16v96a8 8 0 0 0 8 8h8v56h-48v-56Zm40-16V48h24v88ZM48 48h16v96a8 8 0 0 0 8 8h16v56H48Zm160 160h-40v-56h16a8 8 0 0 0 8-8V48h16z");
}
</style><g class="cuyn6tgcc"><path class="cbhb99bpq"/><path class="krw-n5oah"/></g>`,
		"fallback": "ph:piano-keys-duotone",
	});
}

export default Component;
