import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":284};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c3rm5ke6k {
  fill: var(--svg-color--63d2f9, #63d2f9);
  d: path("M256 283.747v-73.86h-80.434c-21.874 0-42.136 11.482-53.339 30.228l-26.076 43.632z");
}

.ff5cl-2pg {
  fill: var(--svg-color--4e5ee4, #4e5ee4);
  d: path("M0 0v73.861h211.857L256 0z");
}

.x29nk5b9k {
  fill: var(--svg-color--63b0f9, #63b0f9);
  d: path("M101.392 115.433L.233 283.747h86.185L207.387 82.383h-47.592c-23.938 0-46.116 12.55-58.403 33.05");
}
</style><path class="c3rm5ke6k"/><path class="ff5cl-2pg"/><path class="x29nk5b9k"/>`,
		"fallback": "logos:open-zeppelin-icon",
	});
}

export default Component;
