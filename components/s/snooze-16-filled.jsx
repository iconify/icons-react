import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ggld-betx {
  fill: currentColor;
  d: path("M4 7.5h2.5a.75.75 0 0 1 .665 1.097l-.055.089L5.457 11h1.042a.75.75 0 0 1 .102 1.493L6.5 12.5H4a.75.75 0 0 1-.665-1.097l.055-.089L5.042 9H3.999a.75.75 0 0 1-.101-1.493zh2.5zm5-5h3.5a.75.75 0 0 1 .681 1.063l-.049.09L10.366 8h2.133a.75.75 0 0 1 .102 1.493L12.5 9.5H9a.75.75 0 0 1-.682-1.063l.05-.09L11.133 4H9a.75.75 0 0 1-.101-1.493zh3.5z");
}
</style><path class="ggld-betx"/>`,
		"fallback": "fluent:snooze-16-filled",
	});
}

export default Component;
