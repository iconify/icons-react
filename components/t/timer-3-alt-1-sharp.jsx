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
		"content": `<style>.t-d3g4bkr {
  fill: currentColor;
  d: path("M9 17.25h6v-8.5H9v2h4V12h-3v2h3v1.25H9zM9 3V1h6v2zm-.488 18.288q-1.637-.713-2.862-1.938t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22t-3.488-.712");
}
</style><path class="t-d3g4bkr"/>`,
		"fallback": "material-symbols:timer-3-alt-1-sharp",
	});
}

export default Component;
