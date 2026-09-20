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
		"content": `<style>.cisx0soqo {
  d: path("M12 15h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.qowfo405a {
  d: path("M12 9h7");
}

.t6hm3zb9t {
  d: path("M10 5v14");
}
</style><g class="nrj6p8qat"><path class="okud9xj_d"/><path class="t6hm3zb9t"/><path class="qowfo405a"/><path class="cisx0soqo"/></g>`,
		"fallback": "iconmind:kv-cache-outline-regular",
	});
}

export default Component;
