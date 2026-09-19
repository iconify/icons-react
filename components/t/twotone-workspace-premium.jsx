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
		"content": `<style>.ex3i87bfk {
  fill: currentColor;
  d: path("M12 4c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m2.31 9.69L12 11.93l-2.32 1.76l.88-2.85L8.25 9h2.84L12 6.19L12.91 9h2.84l-2.32 1.84zM12 19l-4 1.02v-3.1c1.18.68 2.54 1.08 4 1.08s2.82-.4 4-1.08v3.1z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.kzgg_vpng {
  fill: currentColor;
  d: path("M9.68 13.69L12 11.93l2.31 1.76l-.88-2.85L15.75 9h-2.84L12 6.19L11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2l6 2v-7.72A7.96 7.96 0 0 0 20 10m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6m0 15l-4 1.02v-3.1c1.18.68 2.54 1.08 4 1.08s2.82-.4 4-1.08v3.1z");
}
</style><path class="ex3i87bfk"/><path class="kzgg_vpng"/>`,
		"fallback": "ic:twotone-workspace-premium",
	});
}

export default Component;
