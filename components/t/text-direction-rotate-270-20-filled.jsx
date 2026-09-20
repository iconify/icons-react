import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.l8-e3o1sn {
  d: path("M4.22 5.22a.75.75 0 0 0 1.06 1.06L6 5.56v3.69a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2A.748.748 0 0 0 6.752 3h-.004a.748.748 0 0 0-.528.22l-2 2z");
  fill: currentColor;
}

.p3piw632u {
  d: path("M3 13.5a.75.75 0 0 1 .471-.696l7.5-3a.75.75 0 1 1 .557 1.393l-2.028.81v2.985l2.028.812a.75.75 0 0 1-.556 1.393l-7.5-3A.75.75 0 0 1 3 13.5zm2.77 0l2.23.892v-1.784l-2.23.892z");
  fill: currentColor;
}

.r_qlbsxsl {
  d: path("M11.72 5.22a.75.75 0 1 0 1.06 1.06l.72-.72v10.69a.75.75 0 1 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="l8-e3o1sn"/><path class="r_qlbsxsl"/><path class="p3piw632u"/></g>`,
		"fallback": "fluent:text-direction-rotate-270-20-filled",
	});
}

export default Component;
