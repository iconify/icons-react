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
		"content": `<style>.clgch2d_d {
  d: path("m88 72l40 56l-40 56H32V72Zm80 0l-40 56l40 56h64V72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.g8uy2gbvk {
  d: path("M237.66 178.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L212.69 192H168a8 8 0 0 1-6.51-3.35L83.88 80H32a8 8 0 0 1 0-16h56a8 8 0 0 1 6.51 3.35L172.12 176h40.57l-10.35-10.34a8 8 0 0 1 11.32-11.32ZM143 107a8 8 0 0 0 11.16-1.86l18-25.12h40.57l-10.39 10.32a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L212.69 64H168a8 8 0 0 0-6.51 3.35l-20.34 28.47A8 8 0 0 0 143 107m-30 42a8 8 0 0 0-11.16 1.86L83.88 176H32a8 8 0 0 0 0 16h56a8 8 0 0 0 6.51-3.35l20.34-28.47A8 8 0 0 0 113 149");
}
</style><g class="cuyn6tgcc"><path class="clgch2d_d"/><path class="g8uy2gbvk"/></g>`,
		"fallback": "ph:shuffle-angular-duotone",
	});
}

export default Component;
