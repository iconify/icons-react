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
		"content": `<style>.h27tj0b0k {
  d: path("M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5V14a2.5 2.5 0 0 1-2.5 2.5h-7l-4.5 4v-4a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_cwscc1j {
  d: path("m12.661 6.465l.309.685a1.5 1.5 0 0 0 1.203.874l.747.082a.726.726 0 0 1 .409 1.258l-.556.505a1.5 1.5 0 0 0-.46 1.414l.153.736a.726.726 0 0 1-1.07.777l-.653-.372a1.5 1.5 0 0 0-1.486 0l-.653.372a.726.726 0 0 1-1.07-.777l.153-.736a1.5 1.5 0 0 0-.46-1.414l-.556-.505a.726.726 0 0 1 .409-1.258l.747-.082a1.5 1.5 0 0 0 1.203-.874l.309-.685a.726.726 0 0 1 1.322 0");
}
</style><g class="hntgybcog"><path class="h27tj0b0k"/><path class="j_cwscc1j"/></g>`,
		"fallback": "uix:user-feedback-score",
	});
}

export default Component;
