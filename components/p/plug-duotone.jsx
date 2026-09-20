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

.fhi3hdq5h {
  d: path("M237.66 66.34a8 8 0 0 0-11.32 0L192 100.69L155.31 64l34.35-34.34a8 8 0 1 0-11.32-11.32L144 52.69l-26.34-26.35a8 8 0 0 0-11.32 11.32l6.35 6.34l-53 53a40 40 0 0 0 0 56.57l15.71 15.71l-49.06 49.06a8 8 0 0 0 11.32 11.32l49.09-49.09l15.71 15.71a40 40 0 0 0 56.57 0l53-53l6.34 6.35a8 8 0 0 0 11.32-11.32L203.31 112l34.35-34.34a8 8 0 0 0 0-11.32M147.72 185a24 24 0 0 1-33.95 0L71 142.23a24 24 0 0 1 0-33.95l53-53L200.69 132Z");
}

.jng00kbrm {
  d: path("m212 132l-58.63 58.63a32 32 0 0 1-45.25 0l-42.75-42.75a32 32 0 0 1 0-45.25L124 44Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="jng00kbrm"/><path class="fhi3hdq5h"/></g>`,
		"fallback": "ph:plug-duotone",
	});
}

export default Component;
